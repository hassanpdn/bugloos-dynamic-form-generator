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
            :class="`${expanded ? 'w-full' : ''} hover:bg-${bgColor}-50 bg-${bgColor}-200 text-${textColor}`"
            @click="handleClick"
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
            },
            methods: {
                  handleClick(){
                        this.$emit('click')
                  }
            }
      })
</script>

<style>
</style>