<template>
  <div class="personal-model-repo-container p-5 text-center relative">
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
            <CCol md="4"> <!-- Model 01 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Model 01</CCardTitle>
                  <CButton color="info" @click="viewModelDetails">View Details</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Model 02 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Model 02</CCardTitle>
                  <CButton color="info" @click="viewModelDetails">View Details</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Model 03 -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Model 03</CCardTitle>
                  <CButton color="info" @click="viewModelDetails">View Details</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow class="mb-4">
            <CCol md="6"> <!-- Upload New Model -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Upload New Model</CCardTitle>
                  <input type="file" @change="handleFileUpload" />
                  <CButton color="success" @click="uploadModel" class="mt-2">Upload</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6"> <!-- Model Management -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Model Management</CCardTitle>
                  <CButton color="danger" @click="deleteModel">Delete Model</CButton>
                  <CButton color="success" @click="exportModel" class="ml-2">Export Model</CButton>
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
import { CChart } from '@coreui/vue-chartjs'  // Αλλαγή εδώ
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const viewModelDetails = () => {
  console.log('Viewing model details');
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Model file selected:', file.name);
  }
};

const uploadModel = () => {
  console.log('Uploading model');
};

const deleteModel = () => {
  console.log('Deleting model');
};

const exportModel = () => {
  console.log('Exporting model');
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
.personal-model-repo-container {
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
