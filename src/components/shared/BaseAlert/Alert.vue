<template>
      <transition>
            <div :class="{ 'bg-green-100 text-green-800': type === 'success', 'bg-red-100 text-red-800': type === 'error', 'bg-yellow-100 text-yellow-800': type === 'warning', 'bg-blue-100 text-blue-800': type === 'info'}" class="p-4 rounded-md shadow-m absolute top-0 z-20">
                  {{ message }}
            </div>
      </transition>
</template>

<script lang="ts">
      import { defineComponent } from 'vue'
      export default defineComponent({
            props: {
                  message: {
                        type: String,
                        required: true,
                  },
                  type: {
                        type: String,
                        default: 'info',
                        validator: (value: string) => ['info', 'success', 'warning', 'error'].includes(value),
                  },
            },
            computed: {
                  bgColor() {
                        return `bg-${this.type}-100`;
                  },
                  textColor() {
                        return `text-${this.type}-800`;
                  },
            }
      })
</script>

<style>
      .fade-enter-active,
      .fade-leave-active {
            opacity: 0;
      }
</style>