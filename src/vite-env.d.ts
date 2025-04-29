// Declare module for Vue components
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

// If you need custom SVG typing that overrides vite-svg-loader's defaults
declare module '*.svg?component' {
  import { FunctionalComponent, SVGAttributes } from 'vue'
  const component: FunctionalComponent
  export default component
}

// Make sure unplugin-vue-components types are properly defined
declare module 'unplugin-vue-components/resolvers' {
  import type { ComponentResolver } from 'unplugin-vue-components/types'

  export function AntDesignVueResolver(): ComponentResolver
  export function ElementPlusResolver(): ComponentResolver
  export function VantResolver(): ComponentResolver
  // Add other resolvers as needed
}
