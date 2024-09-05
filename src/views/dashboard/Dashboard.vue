<script setup>
import { useRouter } from 'vue-router'
import { CButton } from '@coreui/vue'

const router = useRouter()

const handleLogout = () => {
  // Εδώ θα μπορούσατε να προσθέσετε λογική για καθαρισμό της κατάστασης του χρήστη, αν χρειάζεται
  router.push('/')
}
</script>

<template>
  <div>
    <h1>Welcome to the Dashboard!</h1>
    <p>This is your dashboard where you can manage your settings.</p>
    <CButton color="danger" @click="handleLogout">Logout</CButton>
  </div>
</template>

<style scoped>
/* Προσθέστε στυλ αν χρειάζεται */
</style>
