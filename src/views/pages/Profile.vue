<template>
  <div class="profile-container p-5 text-center relative">
    <video autoplay loop muted class="background-video">
      <source src="/loginvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <CContainer fluid>
      <CRow>
        <CCol :lg="4" class="bg-dark"> <!-- Sidebar takes 1/3 of the width -->
          <CSidebar colorScheme="dark" class="custom-sidebar">
            <CSidebarHeader class="border-b">
              <CSidebarBrand>
                <img src="/logo.png" alt="Logo" class="sidebar-logo" />
              </CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav>
              <CNavTitle class="text-white">Profile Menu</CNavTitle>
              <CNavItem href="#" :active="true" class="nav-item flex items-center text-white">
                <CIcon customClassName="nav-icon text-white" icon="fas fa-user" /> 
                <span class="ml-2">Personal Info</span>
              </CNavItem>
              <CNavItem href="#" class="nav-item flex items-center text-white">
                <CIcon customClassName="nav-icon text-white" icon="fas fa-play" />
                <span class="ml-2">Start a New<br />Optimization Task</span>
              </CNavItem>
              <CNavItem href="#" class="nav-item flex items-center text-white">
                <CIcon customClassName="nav-icon text-white" icon="fas fa-history" /> 
                <span class="ml-2">Previous Tasks</span>
              </CNavItem>
              <CNavItem href="#" class="nav-item flex items-center text-white">
                <CIcon customClassName="nav-icon text-white" icon="fas fa-folder" /> 
                <span class="ml-2">Personal Model Repo</span>
              </CNavItem>
              <CNavItem href="#" class="nav-item flex items-center text-white">
                <CIcon customClassName="nav-icon text-white" icon="fas fa-database" /> 
                <span class="ml-2">Personal Dataset Repo</span>
              </CNavItem>
              <CNavItem class="nav-item flex items-center text-white mt-auto">
                <CButton @click="logout" color="danger" size="sm" class="w-full py-1">
                  <CIcon customClassName="nav-icon text-white" icon="fas fa-sign-out-alt" /> 
                  <span class="ml-2">Logout</span>
                </CButton>
              </CNavItem>
            </CSidebarNav>
            <CSidebarFooter class="border-t">
              <CSidebarToggler />
            </CSidebarFooter>
          </CSidebar>
        </CCol>
        <CCol :lg="8"> <!-- Remaining space for cards -->
          <CRow>
            <CCol md="4"> <!-- Set to 4 for equal width columns -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Personal Information</CCardTitle>
                  <CCardText>
                    Name: John Doe<br />
                    Email: john.doe@example.com
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Set to 4 for equal width columns -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Account Settings</CCardTitle>
                  <CCardText>
                    Change Password<br />
                    Update Email
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Set to 4 for equal width columns -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Analytics</CCardTitle>
                  <CCardText>
                    Last Login: 2023-10-01<br />
                    Activity: Active
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="4"> <!-- Set to 4 for equal width columns -->
              <CCard class="mb-4 bg-dark text-white">
                <CCardBody>
                  <CCardTitle>Overall Green Index</CCardTitle>
                  <CCardText>
                    Your current score: 85/100
                  </CCardText>
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
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CSidebarFooter, CSidebarToggler, CButton } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { useRouter } from 'vue-router'; // Import useRouter for navigation
import '@fortawesome/fontawesome-free/css/all.css' // Import Font Awesome CSS

const router = useRouter(); // Initialize router

const logout = () => {
  // Perform logout logic here (e.g., clear user session, tokens, etc.)
  // Redirect to login page
  router.push({ name: 'Login' }); // Adjust the route name as necessary
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
  opacity: 0.7; /* Increased transparency */
}

.sidebar-logo {
  max-width: 100%;
  height: auto;
  max-height: 50px; /* Logo height adjustment */
}

.custom-sidebar .nav-item {
  white-space: normal; /* Allow text to wrap */
  overflow: visible; /* Show overflow text */
  text-overflow: clip; /* Clip overflow text */
}
</style>