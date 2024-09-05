<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <video autoplay loop muted class="background-video">
      <source src="/loginvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol :lg="2">
          <CCard class="mb-4">
            <CCardBody>
              <div class="text-center mb-4">
                <img src="/logo.png" alt="Logo" class="logo" />
              </div>
              <CForm @submit.prevent="handleLogin">
                <h4 class="text-center">Welcome Back!</h4>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput v-model="username" placeholder="Username" />
                </CInputGroup>
                <CInputGroup class="mb-4">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput v-model="password" type="password" placeholder="Password" />
                </CInputGroup>
                <CButton color="primary" type="submit" class="w-100">Login</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :lg="2">
          <CCard class="h-100 custom-card">
            <CCardBody>
              <CCardTitle class="mb-3">List of Top Models</CCardTitle>
              <CListGroup flush>
                <CListGroupItem>Model A - 95% accuracy</CListGroupItem>
                <CListGroupItem>Model B - 93% accuracy</CListGroupItem>
                <CListGroupItem>Model C - 91% accuracy</CListGroupItem>
                <CListGroupItem>Model D - 89% accuracy</CListGroupItem>
                <CListGroupItem>Model E - 87% accuracy</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :lg="2">
          <CCard class="h-100 custom-card">
            <CCardBody>
              <CCardTitle class="mb-3">List of Top Dataset</CCardTitle>
              <CListGroup flush>
                <CListGroupItem>Dataset A - 10,000 samples</CListGroupItem>
                <CListGroupItem>Dataset B - 8,500 samples</CListGroupItem>
                <CListGroupItem>Dataset C - 7,200 samples</CListGroupItem>
                <CListGroupItem>Dataset D - 6,800 samples</CListGroupItem>
                <CListGroupItem>Dataset E - 5,500 samples</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :lg="2">
          <CCard class="h-100 custom-card">
            <CCardBody>
              <CCardTitle class="mb-3">Energy News</CCardTitle>
              <CAccordion flush>
                <CAccordionItem :item-key="1">
                  <CAccordionHeader>Renewable Energy Breakthrough</CAccordionHeader>
                  <CAccordionBody>
                    Scientists have developed a new solar panel technology that increases efficiency by 40%. This breakthrough could significantly reduce the cost of solar energy and accelerate the transition to renewable energy sources.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem :item-key="2">
                  <CAccordionHeader>Global Energy Consumption Report</CAccordionHeader>
                  <CAccordionBody>
                    A recent study shows that global energy consumption has decreased by 5% in the past year, largely due to increased adoption of energy-efficient technologies and practices in both residential and industrial sectors.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem :item-key="3">
                  <CAccordionHeader>New Energy Storage Solution</CAccordionHeader>
                  <CAccordionBody>
                    Researchers have developed a new type of battery that can store renewable energy for longer periods and at a lower cost. This innovation could solve one of the biggest challenges in the widespread adoption of renewable energy.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :lg="2">
          <CCard class="h-100 custom-card raido-card">
            <CCardBody>
              <CCardTitle class="mb-3">@Web RAIDO horizon program</CCardTitle>
              <CCardText>
                The @Web RAIDO horizon program is an innovative initiative aimed at revolutionizing energy management and optimization. It leverages cutting-edge web technologies and AI to provide efficient, sustainable solutions for the energy sector.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CCard, CCardBody, CCardTitle, CCardText, CListGroup, CListGroupItem, CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue'

const router = useRouter()
const username = ref('')
const password = ref('')

const handleLogin = async () => {
  if (username.value === 'admin' && password.value === 'admin') {
    try {
      await router.push('/profile')  // Αλλαγή από '/dashboard' σε '/profile'
    } catch (error) {
      console.error('Navigation error:', error)
    }
  } else {
    alert('Invalid credentials, please try again.')
  }
}
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
  opacity: 0.5;
}

.logo {
  max-width: 100%;
  height: auto;
  max-height: 100px;
}

.wrapper {
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
}

.custom-card {
  background-color: #f8f9fa;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-card .card-title {
  color: #321fdb;  /* Το ίδιο χρώμα με το κουμπί login (primary color του CoreUI) */
  font-weight: bold;
}

.custom-card .list-group-item {
  background-color: transparent;
  border-color: #e9ecef;
}

.custom-card .accordion-button {
  color: #321fdb;
  font-weight: bold;
}

.custom-card .accordion-button:not(.collapsed) {
  background-color: #e7f1ff;
}

.custom-card .accordion-body {
  background-color: #f8f9fa;
}

.raido-card {
  background-color: #321fdb; /* Το χρώμα του κουμπιού login */
  color: white;
}

.raido-card .card-title {
  color: white;
  font-weight: bold;
}

.raido-card .card-text {
  color: white;
}
</style>