<template>
      <transition name="fade">
            <div class="w-full absolute h-screen top-0 flex">
                  <div @click="$emit('close')" class="absolute bg-black opacity-70 inset-0 z-0" ></div>
                  <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                        <div class="p-4 flex-auto leading-6"><slot/></div>
                  </div>
            </div>
      </transition>
</template>

<script lang="ts">
      import { defineComponent } from 'vue'
      export default defineComponent({
            name: 'modal-component'
      })
</script>

<style lang='scss'>
</style>