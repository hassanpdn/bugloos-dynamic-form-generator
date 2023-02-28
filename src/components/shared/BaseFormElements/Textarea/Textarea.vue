<template>
      <div class="text-area-wrapper">
            <label class="text-sm" :for="placeholder">{{ label }}</label>
            <textarea
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  :placeholder="placeholder"
                  style="resize: none;"
                  :value="modelValue"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                  v-bind="$attrs"
                  :id="placeholder"
                  :maxlength="maxLength"
            >
            </textarea>
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      props: {
            label: {
                  type: String
            },
            placeholder: {
                  type: String
            },
            modelValue: {
                  type: [String, Number] as PropType<string | number>,
                  default: "",
                  required: true
            },
            maxLength: {
                  type: Number as PropType<number>,
                  default: 50,
                  required: true
            },
      }
})
</script>
