<template>
  <div class="new-task1-container p-5 text-center relative">
    <video autoplay loop muted class="background-video">
      <source src="/loginvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <CContainer fluid>
      <CRow>
        <CCol :lg="2" class="bg-dark"> <!-- Sidebar -->
          <CSidebar colorScheme="dark">
            <CSidebarHeader class="border-bottom">
              <CSidebarBrand>
                <img src="/logo.png" alt="Logo" class="sidebar-logo" />
              </CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav>
              <CNavTitle>Profile Menu</CNavTitle>
              <CNavItem href="#" @click="navigateToProfile">
                <CIcon customClassName="nav-icon" icon="cil-user" /> Personal Info
              </CNavItem>
              <CNavItem href="#" @click="navigateToNewTask">
                <CIcon customClassName="nav-icon" icon="cil-media-play" /> Start a New Optimization Task
              </CNavItem>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon="cil-history" /> Previous Tasks
              </CNavItem>
              <CNavGroup>
                <template #togglerContent>
                  <CIcon customClassName="nav-icon" icon="cil-folder" /> Repositories
                </template>
                <CNavItem href="#" @click="navigateToPersonalModelRepo">
                  <CIcon customClassName="nav-icon" icon="cil-storage" /> Personal Model Repo
                </CNavItem>
                <CNavItem href="#" @click="navigateToPersonalDatasetRepo">
                  <CIcon customClassName="nav-icon" icon="cil-data-transfer-down" /> Personal Dataset Repo
                </CNavItem>
              </CNavGroup>
              <CNavItem href="#" @click="logout">
                <CIcon customClassName="nav-icon" icon="cil-account-logout" /> Logout
              </CNavItem>
            </CSidebarNav>
            <CSidebarFooter class="border-top">
              <CSidebarToggler />
            </CSidebarFooter>
          </CSidebar>
        </CCol>
        <CCol :lg="10"> <!-- Main content area -->
          <h2 class="mb-4">HITL Reinforce Learning</h2>
          <CRow>
            <CCol md="6"> <!-- Task Details -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Task Details</CCardTitle>
                  <CCardText>
                    <p>Task Name: Energy Optimization Task</p>
                    <p>Status: In Progress</p>
                    <p>Start Time: {{ new Date().toLocaleString() }}</p>
                    <p>Model: Deep Neural Network</p>
                    <p>Dataset: Energy Consumption Data 2023</p>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Progress -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Progress</CCardTitle>
                  <CProgress :value="progress" class="mb-3" />
                  <CCardText>{{ progress }}% Complete</CCardText>
                  <CChart
                    type="line"
                    :data="chartData"
                    :options="chartOptions"
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="6"> <!-- Select Recommendation 1 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Select Recommendation 1</CCardTitle>
                  <CCardText>
                    <CFormSelect 
                      v-model="selectedRecommendation1" 
                      :options="[
                        { value: 'option1', label: 'Optimize HVAC System' },
                        { value: 'option2', label: 'Implement Smart Lighting' },
                        { value: 'option3', label: 'Upgrade Insulation' }
                      ]" 
                      class="dark-select text-white"
                      :style="{ backgroundColor: '#343a40', color: 'white' }"
                    />
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Select Recommendation 2 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Select Recommendation 2</CCardTitle>
                  <CCardText>
                    <CFormSelect 
                      v-model="selectedRecommendation2" 
                      :options="[
                        { value: 'option1', label: 'Install Solar Panels' },
                        { value: 'option2', label: 'Implement Energy Management System' },
                        { value: 'option3', label: 'Upgrade to Energy-Efficient Appliances' }
                      ]" 
                      class="dark-select text-white"
                      :style="{ backgroundColor: '#343a40', color: 'white' }"
                    />
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="6" style="height: 50%;"> <!-- Optimization Results -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Optimization Results</CCardTitle>
                  <CCardText>
                    <p>Current Best Solution: 85.7% efficiency</p>
                    <p>Energy Savings: 12.3 kWh</p>
                    <p>CO2 Reduction: 8.5 kg</p>
                  </CCardText>
                  <CRow>
                    <CCol md="6">
                      <CChart
                        type="doughnut"
                        :data="optimizationData"
                        :options="{ responsive: true, maintainAspectRatio: false }"
                        style="max-width: 100%; height: 150px;"
                      />
                    </CCol>
                    <CCol md="6">
                      <p>Energy Savings: 12.3 kWh</p>
                      <p>CO2 Reduction: 8.5 kg</p>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Current Performance Analytics -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Current Performance Analytics</CCardTitle>
                  <CCardText>
                    <p>Accuracy: 92%</p>
                    <p>Precision: 0.89</p>
                    <p>Recall: 0.95</p>
                    <p>F1 Score: 0.92</p>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="12"> <!-- Log Output -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Log Output</CCardTitle>
                  <CCardText>
                    <pre class="text-left">
{{ logOutput }}
                    </pre>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CButton @click="applyRecommendations" color="success" class="mt-4 me-2">Apply Recommendations</CButton>
          <CButton @click="completeProcess" color="primary" class="mt-4">Complete Process</CButton>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CSidebarFooter, CSidebarToggler, CButton, CProgress, CFormSelect } from '@coreui/vue'
import { CChart } from '@coreui/vue-chartjs'
import { CIcon } from '@coreui/icons-vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const progress = ref(0);
const logOutput = ref('Initializing optimization task...\n');

const chartData = ref({
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: 'Optimization Progress',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      data: [65, 59, 90, 81, 56, 55, 40]
    }
  ]
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};

const optimizationData = ref({
  labels: ['Optimized', 'Remaining'],
  datasets: [
    {
      data: [85.7, 14.3],
      backgroundColor: ['#41B883', '#E46651'],
    }
  ]
});

const selectedRecommendation1 = ref('');
const selectedRecommendation2 = ref('');

const recommendationOptions1 = [
  { value: '', text: 'Select a recommendation' },
  { value: 'option1', text: 'Adjust HVAC settings' },
  { value: 'option2', text: 'Optimize lighting schedule' },
  { value: 'option3', text: 'Upgrade insulation' },
];

const recommendationOptions2 = [
  { value: '', text: 'Select a recommendation' },
  { value: 'option1', text: 'Install solar panels' },
  { value: 'option2', text: 'Implement smart metering' },
  { value: 'option3', text: 'Conduct employee energy awareness training' },
];

const updateProgress = () => {
  if (progress.value < 100) {
    progress.value += 1;
    logOutput.value += `Iteration ${progress.value}: Objective value = ${(100 - progress.value / 2).toFixed(1)}\n`;
    chartData.value.datasets[0].data.push(100 - progress.value / 2);
    chartData.value.labels.push((chartData.value.labels.length + 1).toString());
  }
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(updateProgress, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const applyRecommendations = () => {
  console.log('Applying recommendations:', selectedRecommendation1.value, selectedRecommendation2.value);
  // Add logic to apply recommendations
};

const completeProcess = () => {
  console.log('Completing process');
  router.push({ name: 'NewTask2' });
};

const logout = () => {
  router.push({ name: 'Login' });
};

const navigateToProfile = () => {
  router.push({ name: 'Profile' });
};

const navigateToNewTask = () => {
  router.push({ name: 'NewTask' });
};

const navigateToPersonalModelRepo = () => {
  router.push({ name: 'PersonalModelRepo' });
};

const navigateToPersonalDatasetRepo = () => {
  router.push({ name: 'PersonalDatasetRepo' });
};
</script>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
}

.sidebar-logo {
  max-width: 100%;
  height: auto;
  max-height: 50px;
}

.text-left {
  text-align: left;
}

pre {
  max-height: 200px;
  overflow-y: auto;
}

.me-2 {
  margin-right: 0.5rem;
}

.dark-select {
  background-color: #343a40;
  color: white;
  border: 1px solid #6c757d;
}

.dark-select option {
  background-color: #343a40;
  color: white;
}

/* Για να διασφαλίσουμε ότι το βέλος του dropdown είναι ορατό */
.dark-select::-ms-expand {
  background-color: #343a40;
  color: white;
}

/* Για webkit browsers (Chrome, Safari) */
.dark-select::-webkit-select-arrow {
  color: white;
}

/* Για Firefox */
.dark-select {
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
</style>