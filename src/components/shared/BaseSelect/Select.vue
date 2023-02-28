<template>
      <div>
            <label class="text-sm" for="select">{{ label }}</label>
            <select id="select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
                  <option :value="modelValue" disabled selected>Select...</option>
                  <template v-for="(option, optionIdx) in options" :key="optionIdx" >
                        <option :value="option.value" v-text="option.name"></option>
                  </template>
            </select>
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface SelectOption {
      name: string;
      value: string;
}

export default defineComponent({
      props: {
            options: { 
                  type: Array as PropType<SelectOption[]>, 
                  required: true 
            },
            modelValue: {
                  type: [String, Number] as PropType<string | number>,
                  default: "",
                  required: true
            },
            label: {
                  type: String
            }
      }
})
</script>