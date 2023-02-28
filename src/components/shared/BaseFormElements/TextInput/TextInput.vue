<template>
      <div class="input-wrapper">
            <label class="text-sm" :for="placeholder">{{ label }}</label>
            <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  :placeholder="placeholder"
                  :value="modelValue"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                  v-bind="$attrs"
                  :id="placeholder"
                  :type="type"
            />
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      props: {
            label: {
                  type: String as PropType<string>,
            },
            placeholder: {
                  type: String as PropType<string>,
            },
            type: {
                  type: String as PropType<string>,
                  default: 'text'
            },
            modelValue: {
                  type: [String, Number] as PropType<string | number>,
                  default: "",
                  required: true
            }
      }
})
</script>
