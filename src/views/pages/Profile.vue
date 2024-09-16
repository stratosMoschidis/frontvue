<template>
  <div class="profile-container p-5 text-center relative">
    <video autoplay loop muted class="background-video">
      <source src="/loginvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <CContainer fluid>
      <CRow>
        <CCol :lg="2" class="bg-dark"> <!-- Sidebar takes 1/6 of the width -->
          <CSidebar colorScheme="dark">
            <CSidebarHeader class="border-bottom">
              <CSidebarBrand>
                <img src="/logo.png" alt="Logo" class="sidebar-logo" />
              </CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav>
              <CNavTitle>Profile Menu</CNavTitle>
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
          <CRow class="justify-content-center">
            <CCol md="6" lg="6" xl="3" class="mb-4"> <!-- Personal Information -->
              <CCard class="h-100 bg-dark text-white shadow-lg">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle class="mb-4">
                    <CIcon icon="cil-user" size="xl" class="me-2" /> Personal Information
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
                  </CCardText>
                  <CButton color="primary" class="mt-3">Edit Profile</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6" lg="6" xl="3" class="mb-4"> <!-- Account Settings -->
              <CCard class="h-100 bg-dark text-white shadow-lg">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle class="mb-4">
                    <CIcon icon="cil-settings" size="xl" class="me-2" /> Account Settings
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    <p><strong>Password:</strong> Last changed 30 days ago</p>
                    <p><strong>Two-Factor Auth:</strong> Enabled</p>
                    <p><strong>Notifications:</strong> Email, SMS</p>
                    <p><strong>Language:</strong> English (US)</p>
                  </CCardText>
                  <CButton color="warning" class="mt-3">Manage Settings</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6" lg="6" xl="3" class="mb-4"> <!-- Analytics -->
              <CCard class="h-100 bg-dark text-white shadow-lg">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle class="mb-4">
                    <CIcon icon="cil-chart" size="xl" class="me-2" /> Analytics
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    <p><strong>Last Login:</strong> 2023-10-01 14:30 UTC</p>
                    <p><strong>Activity Status:</strong> Active</p>
                    <p><strong>Tasks Completed:</strong> 15 this month</p>
                    <p><strong>Avg. Task Duration:</strong> 2.5 hours</p>
                  </CCardText>
                  <CButton color="info" class="mt-3">View Full Report</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="6" lg="6" xl="3" class="mb-4"> <!-- Overall Green Index -->
              <CCard class="h-100 bg-dark text-white shadow-lg">
                <CCardBody class="d-flex flex-column">
                  <CCardTitle class="mb-4">
                    <CIcon icon="cil-eco" size="xl" class="me-2" /> Overall Green Index
                  </CCardTitle>
                  <CCardText class="flex-grow-1">
                    <p><strong>Current Score:</strong> 85/100</p>
                    <p><strong>Improvement:</strong> +5 points this month</p>
                    <p><strong>CO2 Saved:</strong> 500 kg</p>
                    <p><strong>Energy Efficiency:</strong> 92%</p>
                  </CCardText>
                  <CButton color="success" class="mt-3">Improve Score</CButton>
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
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CNavGroup, CSidebarFooter, CSidebarToggler, CButton } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { useRouter } from 'vue-router';
import { useAuth } from '@/store/auth'
import { cilUser, cilMediaPlay, cilHistory, cilFolder, cilAccountLogout, cilStorage, cilDataTransferDown, cilSettings, cilChart, cilEco } from '@coreui/icons'

const router = useRouter();
const { logout: authLogout } = useAuth();

const handleLogout = () => {
  authLogout() // Clear authentication state
  router.push({ name: 'Login' });
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
</style>