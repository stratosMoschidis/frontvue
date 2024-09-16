import { ref } from 'vue'

const isAuthenticated = ref(false)

export const useAuth = () => {
  const login = () => {
    isAuthenticated.value = true
  }

  const logout = () => {
    isAuthenticated.value = false
  }

  return {
    isAuthenticated,
    login,
    logout
  }
}