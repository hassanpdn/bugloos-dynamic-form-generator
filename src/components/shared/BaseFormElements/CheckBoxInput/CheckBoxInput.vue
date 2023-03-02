<template>
      <div class="flex items-center">
            <input 
                  :value="modelValue"
                  v-model="model"
                  type="checkbox" 
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 hover:cursor-pointer"
            >
            <span class="ml-2">{{ details?.label }}</span>
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      props: {
            modelValue: { type: Boolean as PropType<boolean> },
            details: {
                  type: Object as PropType<any>
            }
      },
      computed:{
            model:{
                  get() {
                        return this.modelValue;
                  },
                  set(value: any) {
                        this.$emit("update:modelValue", value);
                  }
            }
      }
})
</script>
