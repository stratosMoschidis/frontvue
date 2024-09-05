<template>
  <div>
    <CRow class="mb-4">
      <CCol :md="6">
        <CCard class="border-primary">
          <CCardHeader class="bg-primary text-white">
            <i class="fas fa-brain me-2"></i> Machine Learning Models
          </CCardHeader>
          <CCardBody>
            <CFormSelect v-model="selectedModel">
              <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
            </CFormSelect>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :md="6">
        <CCard class="border-success">
          <CCardHeader class="bg-success text-white">
            <i class="fas fa-database me-2"></i> Energy Data Names
          </CCardHeader>
          <CCardBody>
            <CFormSelect v-model="selectedName">
              <option v-for="name in names" :key="name" :value="name">{{ name }}</option>
            </CFormSelect>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow class="mb-4">
      <CCol :md="6">
        <CCard class="border-info">
          <CCardHeader class="bg-info text-white">
            <i class="fas fa-newspaper me-2"></i> Energy News
          </CCardHeader>
          <CCardBody>
            <CCarousel>
              <CCarouselItem v-for="(news, index) in newsItems" :key="index">
                <h5>{{ news.title }}</h5>
                <p>{{ news.content }}</p>
              </CCarouselItem>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :md="6">
        <CCard class="border-warning">
          <CCardHeader class="bg-warning text-white">
            <i class="fas fa-info-circle me-2"></i> Platform Information
          </CCardHeader>
          <CCardBody>
            <CAccordion>
              <CAccordionItem>
                <template #header>
                  RAIDO Platform Information
                </template>
                <p>
                  RAIDO is a Horizon 2020 project focused on developing innovative solutions for energy management and optimization. The platform aims to integrate various data sources, including smart meters and IoT devices, to provide real-time insights and analytics. RAIDO leverages advanced machine learning models to predict energy consumption patterns and optimize energy usage, contributing to a more sustainable and efficient energy ecosystem. The project involves collaboration with multiple stakeholders, including energy providers, technology companies, and research institutions, to ensure the successful implementation and scalability of the platform.
                </p>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedModel: '',
      selectedName: '',
      models: ['Random Forest', 'Neural Networks', 'Boosting', 'Support Vector Machines', 'K-Nearest Neighbors'],
      names: ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4', 'Dataset 5'],
      newsItems: [
        { title: 'Energy News 1', content: 'The global energy market is undergoing significant changes as renewable energy sources become more prevalent. Governments and companies are investing heavily in solar, wind, and other renewable energy technologies to reduce carbon emissions and combat climate change. This shift towards cleaner energy is expected to continue, with renewable energy projected to account for a larger share of the global energy mix in the coming years.' },
        { title: 'Energy News 2', content: 'Smart meters and IoT devices are revolutionizing the way we manage and consume energy. These technologies provide real-time data on energy usage, allowing consumers to make more informed decisions about their energy consumption. Additionally, smart meters enable utility companies to optimize energy distribution and reduce waste, leading to a more efficient and sustainable energy system.' },
        { title: 'Energy News 3', content: 'Energy storage solutions are becoming increasingly important as the world transitions to renewable energy. Batteries and other storage technologies allow for the capture and storage of energy generated from renewable sources, ensuring a stable and reliable energy supply even when the sun isn\'t shining or the wind isn\'t blowing. Advances in energy storage technology are expected to play a crucial role in the future of the global energy market.' },
      ],
    }
  },
}
</script>