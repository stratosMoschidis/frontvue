<template>
  <div class="new-task-container p-5 text-center relative">
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
          <h2 class="mb-4 text-white">New Optimization Task</h2>
          <CRow class="equal-height-cards">
            <CCol md="4" class="mb-4"> <!-- Step 1 -->
              <CCard class="h-100 bg-dark text-white card-hover">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle>
                    <CIcon icon="cil-task" /> Step 1
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    Description of Step 1. Select the options that apply to your optimization task.
                  </CCardText>
                  <div class="checkbox-group">
                    <CFormCheck v-model="step1Checked1" label="Option 1" />
                    <CFormCheck v-model="step1Checked2" label="Option 2" />
                    <CFormCheck v-model="step1Checked3" label="Option 3" />
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4" class="mb-4"> <!-- Step 2 -->
              <CCard class="h-100 bg-dark text-white card-hover">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle>
                    <CIcon icon="cil-task" /> Step 2
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    Description of Step 2. Choose the parameters for your optimization process.
                  </CCardText>
                  <div class="checkbox-group">
                    <CFormCheck v-model="step2Checked1" label="Parameter 1" />
                    <CFormCheck v-model="step2Checked2" label="Parameter 2" />
                    <CFormCheck v-model="step2Checked3" label="Parameter 3" />
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4" class="mb-4"> <!-- Step 3 -->
              <CCard class="h-100 bg-dark text-white card-hover">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle>
                    <CIcon icon="cil-task" /> Step 3
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    Description of Step 3. Set additional configurations for your task.
                  </CCardText>
                  <div class="checkbox-group">
                    <CFormCheck v-model="step3Checked1" label="Config 1" />
                    <CFormCheck v-model="step3Checked2" label="Config 2" />
                    <CFormCheck v-model="step3Checked3" label="Config 3" />
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4" class="mb-4"> <!-- Upload Widget for Model -->
              <CCard class="h-100 bg-dark text-white card-hover">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle>
                    <CIcon icon="cil-cloud-upload" /> Step 4 - Upload Model
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    Upload your optimization model here. Supported formats: .pkl, .h5, .json
                  </CCardText>
                  <CFormInput type="file" @change="handleFileUpload" />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4" class="mb-4"> <!-- Upload/Select Dataset -->
              <CCard class="h-100 bg-dark text-white card-hover">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle>
                    <CIcon icon="cil-folder" /> Step 5 - Dataset
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    Upload a new dataset or select an existing one from your repository.
                  </CCardText>
                  <CFormInput type="file" @change="handleFileUploadDataset" class="mb-2" />
                  <CFormSelect v-model="selectedDataset" :options="datasetOptions" />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4" class="mb-4"> <!-- Step 6 -->
              <CCard class="h-100 bg-dark text-white card-hover">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle>
                    <CIcon icon="cil-settings" /> Step 6 - Final Settings
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    Configure the final settings for your optimization task.
                  </CCardText>
                  <div class="checkbox-group">
                    <CFormCheck v-model="step6Checked1" label="Setting 1" />
                    <CFormCheck v-model="step6Checked2" label="Setting 2" />
                    <CFormCheck v-model="step6Checked3" label="Setting 3" />
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CButton @click="startProcessAll" color="primary" size="lg" class="mt-4">Start Optimization Process</CButton>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CSidebarFooter, CSidebarToggler, CButton, CFormCheck, CFormInput, CFormSelect } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const logout = () => {
  router.push({ name: 'Login' });
};

const startProcessAll = () => {
  console.log('Starting all processes');
  router.push({ name: 'NewTask1' });
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

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('File uploaded:', file.name);
    // Add your file handling logic here
  }
};

const handleFileUploadDataset = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Dataset file uploaded:', file.name);
    // Add your dataset file handling logic here
  }
};

// State for checkboxes
const step1Checked1 = ref(false);
const step1Checked2 = ref(false);
const step1Checked3 = ref(false);
const step2Checked1 = ref(false);
const step2Checked2 = ref(false);
const step2Checked3 = ref(false);
const step3Checked1 = ref(false);
const step3Checked2 = ref(false);
const step3Checked3 = ref(false);
const step6Checked1 = ref(false);
const step6Checked2 = ref(false);
const step6Checked3 = ref(false);

// State for dataset selection
const selectedDataset = ref('');

// Options for dataset selection
const datasetOptions = [
  { value: '', label: 'Select a dataset', disabled: true },
  { value: 'dataset1', label: 'Energy Consumption 2022' },
  { value: 'dataset2', label: 'Solar Panel Output 2023' },
  { value: 'dataset3', label: 'Wind Turbine Efficiency Data' },
];
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

.equal-height-cards {
  display: flex;
  flex-wrap: wrap;
}

.equal-height-cards > [class*='col-'] {
  display: flex;
  flex-direction: column;
}

.card-hover {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.checkbox-group {
  text-align: left;
}

.checkbox-group .form-check {
  margin-bottom: 0.5rem;
}
</style>