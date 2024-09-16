<template>
  <div class="d-flex">
    <nav class="bg-dark text-white p-3" style="width: 250px;">
      <div class="d-flex justify-content-center mb-3">
        <img src="/logo.png" alt="Logo" class="sidebar-logo" />
      </div>
      <button @click="startOptimizationTask" class="btn btn-secondary w-100 mb-2">
        Start a New Optimization Task
      </button>
      <button class="btn btn-secondary w-100 mb-2">Personal Info</button>
      <button class="btn btn-secondary w-100 mb-2">Previous Tasks</button>
      <button class="btn btn-secondary w-100 mb-2">Personal Model Repo</button>
      <button class="btn btn-secondary w-100 mb-2">Personal Dataset Repo</button>
      <button @click="logout" class="btn btn-danger w-100">Logout</button>
    </nav>
    <div class="flex-grow p-3">
      <CContainer fluid>
        <CRow>
          <CCol md="4" v-for="step in steps" :key="step.id">
            <CCard class="mb-4 bg-dark text-white">
              <CCardBody>
                <CCardTitle>{{ step.title }}</CCardTitle>
                <CCardText>
                  <div v-for="(checkbox, index) in step.checkboxes" :key="index">
                    <input type="checkbox" v-model="checkbox.checked" />
                    <label>{{ checkbox.label }}</label>
                  </div>
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <button @click="startProcess" class="btn btn-primary">Start Process</button>
      </CContainer>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const steps = [
  { id: 1, title: 'Step 1', checkboxes: [{ label: 'Option 1', checked: false }, { label: 'Option 2', checked: false }, { label: 'Option 3', checked: false }] },
  // Άλλες βήματα...
];

const startProcess = () => {
  console.log('Process started with the following selections:', steps);
};

const startOptimizationTask = () => {
  router.push({ name: 'NewPage3' });
};

const logout = () => {
  router.push({ name: 'Login' });
};
</script>

<style scoped>
.sidebar-logo {
  max-width: 100%;
  height: auto;
  max-height: 50px; /* Logo height adjustment */
}
</style>