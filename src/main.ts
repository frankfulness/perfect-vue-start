import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
// import { plugin } from '@formkit/vue'
// import formkitConfig from './formkit.config.ts'

import App from './App.vue'
import router from './router'

// Create the app instance
const app = createApp(App)

// Use required plugins
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
// app.use(plugin, formkitConfig)

// Mount the app
app.mount('#app')

// Debug message to ensure the app is loaded
console.log('Vue app initialized')
