<template>
      <button class="
            p-2.5
            rounded-lg
            hover:shadow-md 
            hover:shadow-gray-100 
            transition-colors 
            transition-shadows 
            duration-500
            ease-linear"
            :class="`${expanded ? 'w-full' : ''} ${disabled ? 'bg-gray-400' : ''} hover:bg-${bgColor}-50 bg-${bgColor}-300 text-${textColor}`"
            :disabled="disabled"
      >
            {{ text }}
      </button>
</template>

<script lang="ts">
      import { defineComponent, PropType } from 'vue';
      export default defineComponent({
            name: 'button-component',
            props: {
                  expanded: {
                        type: Boolean as PropType<boolean>,
                        default: false
                  },
                  textColor: {
                        type: String as PropType<string>,
                        default: 'black'
                  },
                  bgColor: {
                        type: String as PropType<string>,
                        default: "bg-blue-500"
                  },
                  text: {
                        type: String as PropType<string>,
                        default: "button"
                  },
                  disabled: {
                        type: Boolean as PropType<boolean>,
                        default: false
                  }
            }
      })
</script>

<style>
</style>