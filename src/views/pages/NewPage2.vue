<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <div class="sidebar bg-light p-3">
      <CButton color="primary" class="mb-3 w-100">Start a New Optimization Task</CButton>
      <CButton color="secondary" class="mb-3 w-100">Previous Tasks</CButton>
      <CButton color="info" class="mb-3 w-100">Personal Model Repo</CButton>
      <CButton color="warning" class="mb-3 w-100">Personal Dataset Repo</CButton>
    </div>

    <!-- Main Content -->
    <div class="flex-grow-1 p-3">
      <CRow class="mb-4">
        <CCol :md="6">
          <CCard class="border-primary">
            <CCardHeader class="bg-primary text-white">
              <i class="fas fa-chart-line me-2"></i> Profile Views
            </CCardHeader>
            <CCardBody>
              <CChart
                type="line"
                :wrapper="false"
                :data="{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: [40, 20, 12, 39, 10, 40, 39]
                    },
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [50, 12, 28, 29, 7, 25, 12]
                    }
                  ]
                }"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :md="6">
          <CCard class="border-success">
            <CCardHeader class="bg-success text-white">
              <i class="fas fa-user-friends me-2"></i> New Users
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol :sm="6">
                  <CWidgetStatsC
                    class="mb-3"
                    value="87.500"
                    :progress="{ color: 'info', value: 75 }"
                    title="Visitors"
                  >
                    <template #icon><CIcon icon="cil-people" height="36" /></template>
                    <template #title>Visitors</template>
                  </CWidgetStatsC>
                </CCol>
                <CCol :sm="6">
                  <CWidgetStatsC
                    class="mb-3"
                    inverse
                    color="info"
                    value="385"
                    :progress="{ value: 75 }"
                    title="New clients"
                  >
                    <template #icon><CIcon icon="cil-user-follow" height="36" /></template>
                  </CWidgetStatsC>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow class="mb-4">
        <CCol :md="6">
          <CCard style="width: 18rem">
            <CCardBody>
              <CCardTitle>Researcher Profile</CCardTitle>
              <CCardSubtitle class="mb-2 text-body-secondary">Dr. John Doe</CCardSubtitle>
              <CCardText>
                Dr. John Doe is a leading researcher in the field of renewable energy. His work focuses on the development of innovative solutions for energy management and optimization. He has published numerous papers and has been a keynote speaker at several international conferences.
              </CCardText>
              <CCardLink href="#">View Publications</CCardLink>
              <CCardLink href="#">Contact</CCardLink>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :md="6">
          <CCard class="border-warning">
            <CCardHeader class="bg-warning text-white">
              <i class="fas fa-tasks me-2"></i> Tasks
            </CCardHeader>
            <CCardBody>
              <ul>
                <li>Task 1: Complete the report</li>
                <li>Task 2: Update the website</li>
                <li>Task 3: Call the client</li>
                <li>Task 4: Prepare the presentation</li>
                <li>Task 5: Attend the meeting</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow class="mb-4">
        <CCol :md="6">
          <CCard class="border-danger">
            <CCardHeader class="bg-danger text-white">
              <i class="fas fa-exclamation-triangle me-2"></i> Alerts
            </CCardHeader>
            <CCardBody>
              <ul>
                <li>Alert 1: System overload</li>
                <li>Alert 2: Unauthorized access</li>
                <li>Alert 3: Low disk space</li>
                <li>Alert 4: High memory usage</li>
                <li>Alert 5: Network latency</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :md="6">
          <CCard class="border-secondary">
            <CCardHeader class="bg-secondary text-white">
              <i class="fas fa-cogs me-2"></i> System Status
            </CCardHeader>
            <CCardBody>
              <ul>
                <li>CPU Usage: 75%</li>
                <li>Memory Usage: 60%</li>
                <li>Disk Usage: 80%</li>
                <li>Network Speed: 1Gbps</li>
                <li>Uptime: 99.99%</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import { CChartBar, CChartPie } from '@coreui/vue-chartjs'
import { CChart } from '@coreui/vue-chartjs'
import { CWidgetStatsC } from '@coreui/vue'

export default {
  components: {
    CChart,
    CChartBar,
    CChartPie,
    CWidgetStatsC,
  },
}
</script>

<style scoped>
.sidebar {
  width: 250px;
}
</style>