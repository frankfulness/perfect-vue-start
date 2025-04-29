<script setup lang="ts">
import { ref } from 'vue'
import DataTable from './components/DataTable.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'

// Import Reka UI components individually (better for debugging)
import { AccordionRoot } from 'reka-ui'
import { AccordionItem } from 'reka-ui'
import { AccordionTrigger } from 'reka-ui'
import { AccordionContent } from 'reka-ui'
import { PopoverRoot } from 'reka-ui'
import { PopoverTrigger } from 'reka-ui'
import { PopoverContent } from 'reka-ui'
import { PopoverArrow } from 'reka-ui'
// import { TooltipRoot } from 'reka-ui'
// import { TooltipTrigger } from 'reka-ui'
// import { TooltipContent } from 'reka-ui'

// Sample data for the table
const data = ref([
  {
    id: 1,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    status: 'Active',
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    title: 'Product Directives Officer',
    department: 'Intranet',
    status: 'Inactive',
    role: 'Owner',
  },
  {
    id: 3,
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    title: 'Forward Response Developer',
    department: 'Directives',
    status: 'Active',
    role: 'Member',
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    title: 'Central Security Manager',
    department: 'Program',
    status: 'Active',
    role: 'Member',
  },
  {
    id: 5,
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    title: 'Lead Implementation Liaison',
    department: 'Mobility',
    status: 'Inactive',
    role: 'Admin',
  },
])

// Table columns configuration
const columns = [
  { id: 'name', accessorKey: 'name', header: 'Name' },
  { id: 'title', accessorKey: 'title', header: 'Title' },
  { id: 'email', accessorKey: 'email', header: 'Email' },
  { id: 'status', accessorKey: 'status', header: 'Status' },
  { id: 'role', accessorKey: 'role', header: 'Role' },
]

// Accordion state
const expandedAccordion = ref('item-1')
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto">
    <!-- Header -->
    <header class="flex justify-between items-center p-4 bg-card shadow rounded-lg mb-8">
      <h1 class="text-2xl font-bold">Vue MVP Template</h1>
      <DarkModeToggle />
    </header>

    <!-- Data Table Section -->
    <section class="mb-8 bg-card p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-6">Data Table Example</h2>
      <DataTable :data="data" :columns="columns" />
    </section>

    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Reka UI Accordion Example -->
      <section class="bg-card p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-6">Reka UI Accordion Example</h2>

        <AccordionRoot v-model="expandedAccordion" class="w-full">
          <AccordionItem value="item-1" class="border-b border-border">
            <AccordionTrigger
              class="flex justify-between items-center w-full py-4 px-2 text-left font-medium text-foreground hover:bg-hover transition-colors"
            >
              What is Reka UI?
              <span
                class="ml-2 transition-transform duration-200"
                :class="expandedAccordion === 'item-1' ? 'rotate-180' : ''"
              >
                ▼
              </span>
            </AccordionTrigger>
            <AccordionContent
              class="overflow-hidden transition-all duration-300 p-4 text-muted-foreground"
            >
              Reka UI is an open-source library with unstyled, primitive components for building
              high-quality, accessible design systems and web apps.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" class="border-b border-border">
            <AccordionTrigger
              class="flex justify-between items-center w-full py-4 px-2 text-left font-medium text-foreground hover:bg-hover transition-colors"
            >
              What is TanStack Table?
              <span
                class="ml-2 transition-transform duration-200"
                :class="expandedAccordion === 'item-2' ? 'rotate-180' : ''"
              >
                ▼
              </span>
            </AccordionTrigger>
            <AccordionContent
              class="overflow-hidden transition-all duration-300 p-4 text-muted-foreground"
            >
              TanStack Table is a headless UI library for building powerful tables and datagrids
              while retaining 100% control over markup and styles.
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </section>

      <!-- Reka UI Popover & Tooltip Examples -->
      <section class="bg-card p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-6">Reka UI Popover & Tooltip Examples</h2>

        <div class="flex space-x-4 mb-6">
          <PopoverRoot>
            <PopoverTrigger
              class="px-4 py-2 bg-button text-button-foreground rounded shadow hover:opacity-90 transition-opacity"
            >
              Click me
            </PopoverTrigger>
            <PopoverContent
              class="z-50 w-64 bg-card text-card-foreground p-4 rounded shadow-lg border border-border"
            >
              <div class="text-sm">
                <h3 class="text-base font-medium mb-2">Popover Content</h3>
                <p>This is a popover component from Reka UI.</p>
              </div>
              <PopoverArrow class="fill-current text-border" />
            </PopoverContent>
          </PopoverRoot>

          <!-- <TooltipRoot>
            <TooltipTrigger
              class="px-4 py-2 bg-secondary text-secondary-foreground rounded shadow hover:bg-hover transition-colors"
            >
              Hover me
            </TooltipTrigger>
            <TooltipContent
              class="z-50 px-4 py-2 bg-foreground text-background text-sm rounded shadow"
            >
              I'm a tooltip!
            </TooltipContent>
          </TooltipRoot> -->
        </div>
      </section>
    </div>
  </div>
</template>

<style>
/* Add some base styles to ensure proper rendering */
:root {
  --color-text: #333;
  --color-background: #f9fafb;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}
</style>
