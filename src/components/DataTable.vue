<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useVueTable, getCoreRowModel } from '@tanstack/vue-table'

// Define the table types
interface RowData {
  id: number
  name?: string
  email?: string
  title?: string
  department?: string
  status?: string
  role?: string
  [key: string]: any
}

interface ColumnDef {
  id: string
  accessorKey: string
  header: string
  cell?: any
}

// Define props
interface Props {
  data: RowData[]
  columns: ColumnDef[]
}

const props = defineProps<Props>()

// Setup the table
const table = useVueTable({
  data: props.data,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
})

// Debug logs to check what's happening
console.log('DataTable props received:', {
  data: props.data,
  columns: props.columns,
})
console.log('Table instance created:', table)
</script>

<template>
  <div class="overflow-x-auto">
    <!-- Basic debug info -->
    <div class="mb-2 text-sm text-gray-500">Table data: {{ props.data.length }} rows</div>

    <table class="min-w-full divide-y divide-gray-200 bg-white">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="column in props.columns"
            :key="column.id"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ column.header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(row, i) in props.data" :key="row.id">
          <td
            v-for="column in props.columns"
            :key="`${i}-${column.id}`"
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
          >
            <template v-if="column.accessorKey === 'status'">
              <span
                :class="[
                  'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full',
                  row[column.accessorKey] === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                ]"
              >
                {{ row[column.accessorKey] }}
              </span>
            </template>
            <template v-else>
              {{ row[column.accessorKey] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
