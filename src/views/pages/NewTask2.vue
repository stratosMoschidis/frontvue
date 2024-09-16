<template>
  <div class="new-task2-container p-5 text-center relative">
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
          <CRow>
            <CCol md="6"> <!-- Task Details -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Task Details</CCardTitle>
                  <CCardText>
                    <p>Task Name: Energy Optimization Task</p>
                    <p>Status: Completed</p>
                    <p>End Time: {{ new Date().toLocaleString() }}</p>
                    <p>Model: Deep Neural Network</p>
                    <p>Dataset: Energy Consumption Data 2023</p>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Final Results -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Final Results</CCardTitle>
                  <CProgress :value="100" class="mb-3" />
                  <CCardText>100% Complete</CCardText>
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
            <CCol md="4"> <!-- Analytics 1 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Analytics 1: Energy Consumption</CCardTitle>
                  <CChart
                    type="line"
                    :data="energyConsumptionData"
                    :options="chartOptions"
                  />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Analytics 2 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Analytics 2: Cost Savings</CCardTitle>
                  <CChart
                    type="bar"
                    :data="costSavingsData"
                    :options="chartOptions"
                  />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Analytics 3 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Analytics 3: Efficiency Improvement</CCardTitle>
                  <CChart
                    type="radar"
                    :data="efficiencyImprovementData"
                    :options="chartOptions"
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="6"> <!-- Recommendations -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Recommendations</CCardTitle>
                  <CCardText>
                    <ul class="text-left">
                      <li>Optimize HVAC system scheduling</li>
                      <li>Upgrade to energy-efficient lighting</li>
                      <li>Implement smart power management</li>
                      <li>Conduct regular energy audits</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Next Steps -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Next Steps</CCardTitle>
                  <CCardText>
                    <ol class="text-left">
                      <li>Review optimization results</li>
                      <li>Implement recommended changes</li>
                      <li>Monitor performance</li>
                      <li>Schedule follow-up analysis</li>
                    </ol>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CButton @click="finishTask" color="success" class="mt-4">Finish Task</CButton>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CNavGroup, CSidebarFooter, CSidebarToggler, CButton, CProgress } from '@coreui/vue'
import { CChart } from '@coreui/vue-chartjs'
import { CIcon } from '@coreui/icons-vue'
import { useRouter } from 'vue-router';

const router = useRouter();

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

const energyConsumptionData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Energy Consumption (kWh)',
    data: [4500, 4200, 4800, 4300, 4000, 3800],
    borderColor: 'rgba(75, 192, 192, 1)',
    tension: 0.1
  }]
});

const costSavingsData = ref({
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Cost Savings ($)',
    data: [500, 750, 1000, 1250],
    backgroundColor: 'rgba(153, 102, 255, 0.6)'
  }]
});

const efficiencyImprovementData = ref({
  labels: ['HVAC', 'Lighting', 'Equipment', 'Insulation', 'Renewable Energy'],
  datasets: [{
    label: 'Efficiency Improvement (%)',
    data: [65, 59, 90, 81, 56],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
});

const finishTask = () => {
  console.log('Task finished');
  router.push({ name: 'Profile' });
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

onMounted(() => {
  // Any initialization logic can go here
});
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
</style>