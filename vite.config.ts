import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import tailwindcss from '@tailwindcss/vite'
import type { ComponentResolverFunction, ComponentResolver } from 'unplugin-vue-components/types'

// Import Reka resolver if available
let RekaResolver: (() => ComponentResolver) | null = null
try {
  // Using dynamic import with type assertion
  const rekaModule = await import('reka-ui/resolver')
  RekaResolver = rekaModule.default
} catch (error) {
  console.warn('Reka UI resolver not available, skipping...')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    vueJsx(),
    // Configure Components with TypeScript support
    Components({
      dts: true, // Generate TypeScript declaration
      resolvers: [RekaResolver ? RekaResolver() : undefined].filter(
        Boolean,
      ) as ComponentResolverFunction[],
    }),
    // Configure SVG loader with ID prefixing to prevent conflicts
    svgLoader({
      svgoConfig: {
        plugins: [{ name: 'prefixIds', params: { prefixIds: true, prefixClassNames: false } }],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env': {},
  },
})
