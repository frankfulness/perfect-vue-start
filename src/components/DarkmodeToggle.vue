<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'
import { Moon, Sun } from 'lucide-vue-next'

const layoutStore = useLayoutStore()
</script>

<template>
  <button
    class="rounded-full p-2 bg-secondary hover:bg-hover transition-colors duration-300"
    @click="layoutStore.toggleDarkMode"
  >
    <Sun v-if="layoutStore.isDarkMode" class="w-5 h-5" />
    <Moon v-else class="w-5 h-5" />
  </button>
</template>
