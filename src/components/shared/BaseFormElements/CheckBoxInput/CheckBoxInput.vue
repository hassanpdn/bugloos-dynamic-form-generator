<template>
      <div class="flex items-center">
            <input 
                  :value="value"
                  v-model="model"
                  type="checkbox" 
            >
            <span class="ml-2">{{ label }}</span>
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      props: {
            modelValue: { type: Boolean as PropType<boolean> },
            value: { type: Boolean as PropType<boolean> },
            label: { type: String as PropType<string> }
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
