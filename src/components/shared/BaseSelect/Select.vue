<template>
      <div>
            <select :value="modelValue" @input="$emit('input', $event)" :id="label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-none block w-full p-2.5">
                  <option disabled selected>{{ label }}</option>
                  <option v-for="(option, index) in options" :key="`oprion-${index}`" :value="option">
                        {{ option }}
                  </option>
            </select>
      </div>
</template>

<script lang="ts">
      import { defineComponent, PropType } from 'vue';
      export default defineComponent({
            name: 'select-component',
            props: {
                  options: {
                        type: Object as PropType<object>,
                        default: {}
                  },
                  label: {
                        type: String as PropType<string>,
                        default: ''
                  },
                  description: {
                        type: String as PropType<string>,
                        default: ''
                  },
                  modelValue: {
                        type: String as PropType<string>,
                        default: ''
                  }
            },
            methods: {
                  onSelect(event: Event){
                        this.$emit('input', (event.target as HTMLSelectElement).value)
                  }
            }
      })
</script>

<style>
</style>