<template>
      <div class="main-content h-screen w-full p-10 bg-red-100">
            {{ currentComponent }}
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
      data(){
            return {
                  currentComponent: 'Forms',
                  isSidebarOpened: true
            }
      },
      methods: {
            setActiveMenu(currentComponent: string): void{
                  this.currentComponent = currentComponent
            },
            setSidebarState(isSidebarOpened: boolean): void{
                  this.isSidebarOpened = isSidebarOpened
            }
      },
      mounted(){
            this.emitter.on('setActiveMenu', this.setActiveMenu)
            this.emitter.on('setSidebarState', this.setSidebarState)
      }
})
</script>