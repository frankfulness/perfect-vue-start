import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const sidebarOpen = ref(true)
  const isDarkMode = ref(false)

  function toggleSidebar(): void {
    sidebarOpen.value = !sidebarOpen.value
  }

  function toggleDarkMode(): void {
    isDarkMode.value = !isDarkMode.value
    updateDarkModeClass(isDarkMode.value)
  }

  function updateDarkModeClass(isDark: boolean): void {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  return {
    sidebarOpen,
    isDarkMode,
    toggleSidebar,
    toggleDarkMode,
  }
})
