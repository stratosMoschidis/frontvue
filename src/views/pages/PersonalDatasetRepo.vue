<template>
  <div class="personal-dataset-repo-container p-5 text-center relative">
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
              <CNavTitle class="text-white">Profile Menu</CNavTitle>
              <CNavItem href="#" @click="navigateToProfile" class="text-white">
                <CIcon customClassName="nav-icon" icon="cil-user" /> Personal Info
              </CNavItem>
              <CNavItem href="#" @click="navigateToNewTask" class="text-white">
                <CIcon customClassName="nav-icon" icon="cil-media-play" /> Start a New Optimization Task
              </CNavItem>
              <CNavItem href="#" class="text-white">
                <CIcon customClassName="nav-icon" icon="cil-history" /> Previous Tasks
              </CNavItem>
              <CNavGroup>
                <template #togglerContent>
                  <CIcon customClassName="nav-icon" icon="cil-folder" /> Repositories
                </template>
                <CNavItem href="#" @click="navigateToPersonalModelRepo" class="text-white">
                  <CIcon customClassName="nav-icon" icon="cil-storage" /> Personal Model Repo
                </CNavItem>
                <CNavItem href="#" @click="navigateToPersonalDatasetRepo" class="text-white">
                  <CIcon customClassName="nav-icon" icon="cil-data-transfer-down" /> Personal Dataset Repo
                </CNavItem>
              </CNavGroup>
              <CNavItem href="#" @click="logout" class="text-white">
                <CIcon customClassName="nav-icon" icon="cil-account-logout" /> Logout
              </CNavItem>
            </CSidebarNav>
            <CSidebarFooter class="border-top">
              <CSidebarToggler />
            </CSidebarFooter>
          </CSidebar>
        </CCol>
        <CCol :lg="10"> <!-- Main content area -->
          <CRow class="mb-4">
            <CCol md="4"> <!-- Dataset 01 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Dataset 01</CCardTitle>
                  <CChart
                    type="doughnut"
                    :data="chartData"
                    :options="chartOptions"
                  />
                  <CButton color="info" @click="viewDatasetDetails">View Details</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Dataset 02 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Dataset 02</CCardTitle>
                  <CChart
                    type="bar"
                    :data="barChartData"
                    :options="chartOptions"
                  />
                  <CButton color="info" @click="viewDatasetDetails">View Details</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Dataset 03 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Dataset 03</CCardTitle>
                  <CChart
                    type="line"
                    :data="lineChartData"
                    :options="chartOptions"
                  />
                  <CButton color="info" @click="viewDatasetDetails">View Details</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow class="mb-4">
            <CCol md="6"> <!-- Upload New Dataset -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Upload New Dataset</CCardTitle>
                  <input type="file" @change="handleFileUpload" />
                  <CButton color="success" @click="uploadDataset" class="mt-2">Upload</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Dataset Analysis -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Dataset Analysis</CCardTitle>
                  <CButton color="primary" @click="performAnalysis">Analyze Datasets</CButton>
                  <CButton color="warning" @click="compareDatasets" class="ml-2">Compare Datasets</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow class="mb-4">
            <CCol md="6"> <!-- Dataset Management -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Dataset Management</CCardTitle>
                  <CButton color="danger" @click="deleteDataset">Delete Dataset</CButton>
                  <CButton color="success" @click="exportDataset" class="ml-2">Export Dataset</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Data Visualization -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Data Visualization</CCardTitle>
                  <CButton color="info" @click="generateVisualization">Generate Visualization</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CButton, CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CSidebarFooter, CSidebarToggler } from '@coreui/vue';
import { CChart } from '@coreui/vue-chartjs'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const chartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 02',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39]
    }
  ]
};

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 03',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};

const viewDatasetDetails = () => {
  console.log('Viewing dataset details');
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Dataset file selected:', file.name);
  }
};

const uploadDataset = () => {
  console.log('Uploading dataset');
};

const performAnalysis = () => {
  console.log('Performing dataset analysis');
};

const compareDatasets = () => {
  console.log('Comparing datasets');
};

const deleteDataset = () => {
  console.log('Deleting dataset');
};

const exportDataset = () => {
  console.log('Exporting dataset');
};

const generateVisualization = () => {
  console.log('Generating visualization');
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
.personal-dataset-repo-container {
  border-radius: 8px;
  padding: 20px;
}

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

.ml-2 {
  margin-left: 0.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}
</style>