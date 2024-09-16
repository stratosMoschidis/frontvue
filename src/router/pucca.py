class EventHandler(AsyncAssistantEventHandler):

    def __init__(self, assistant_name: str) -> None:
        super().__init__()
        self.current_message: cl.Message = None
        self.current_step: cl.Step = None
        self.current_tool_call = None
        self.assistant_name = assistant_name

    async def on_text_created(self, text) -> None:
        self.current_message = await cl.Message(author=self.assistant_name,
                                                content="").send()

    async def on_text_delta(self, delta, snapshot):
        await self.current_message.stream_token(delta.value)

    async def on_text_done(self, text):
        await self.current_message.update()
        if text.annotations:
            print(text.annotations)
            for annotation in text.annotations:
                if annotation.type == "file_path":
                    response = await async_openai_client.files.with_raw_response.content(
                        annotation.file_path.file_id)
                    file_name = annotation.text.split("/")[-1]
                    try:
                        # Έλεγχος αν το αρχείο είναι PDF
                        if file_name.endswith(".pdf"):
                            element = cl.PDF(name=file_name, content=response.content)
                        else:
                            element = cl.File(content=response.content, name=file_name)

                        await cl.Message(content="", elements=[element]).send()

                        # Αντικατάσταση του αρχείου με έναν σύνδεσμο
                        if annotation.text in self.current_message.content and element.chainlit_key:
                            self.current_message.content = self.current_message.content.replace(
                                annotation.text,
                                f"/project/file/{element.chainlit_key}?session_id={cl.context.session.id}"
                            )
                            await self.current_message.update()

                    except Exception as e:
                        print(f"Error displaying file: {e}")

    async def on_tool_call_created(self, tool_call):
        self.current_tool_call = tool_call.id
        self.current_step = cl.Step(name=tool_call.type, type="tool")
        self.current_step.language = "python"
        self.current_step.created_at = utc_now()
        await self.current_step.send()

    async def on_tool_call_delta(self, delta, snapshot):
        if snapshot.id != self.current_tool_call:
            self.current_tool_call = snapshot.id
            self.current_step = cl.Step(name=delta.type, type="tool")
            self.current_step.language = "python"
            self.current_step.start = utc_now()
            await self.current_step.send()

        if delta.type == "code_interpreter":
            if delta.code_interpreter.outputs:
                for output in delta.code_interpreter.outputs:
                    if output.type == "logs":
                        error_step = cl.Step(name=delta.type, type="tool")
                        error_step.is_error = True
                        error_step.output = output.logs
                        error_step.language = "markdown"
                        error_step.start = self.current_step.start
                        error_step.end = utc_now()
                        await error_step.send()
            else:
                if delta.code_interpreter.input:
                    await self.current_step.stream_token(
                        delta.code_interpreter.input)

    async def on_tool_call_done(self, tool_call):
        self.current_step.end = utc_now()
        await self.current_step.update()

    async def on_image_file_done(self, image_file):
        image_id = image_file.file_id
        response = await async_openai_client.files.with_raw_response.content(
            image_id)
        image_element = cl.Image(name=image_id,
                                 content=response.content,
                                 display="inline",
                                 size="large")
        if not self.current_message.elements:
            self.current_message.elements = []
        self.current_message.elements.append(image_element)
        await self.current_message.update()
