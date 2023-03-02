<template>
      <div class="main-content h-screen w-full p-16">
            <h1 class="font-bold text-2xl mb-2">{{ currentComponent }} {{ formName }}</h1>
            <component :is="currentComponent"></component>
      </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
      components: {
            Forms: defineAsyncComponent(() => import('@/components/features/FormLists/index.vue')),
            Create: defineAsyncComponent(() => import('@/components/features/FormBuilder/index.vue'))
      },
      data(){
            return {
                  currentComponent: 'Create',
                  formName: '',
                  isSidebarOpened: true
            }
      },
      methods: {
            setActiveMenu(currentComponent: string): void{
                  this.currentComponent = currentComponent
            },
            setSidebarState(isSidebarOpened: boolean): void{
                  this.isSidebarOpened = isSidebarOpened
            },
            setFormName(name: string): void{
                  this.formName = name
            },
      },
      mounted(){
            this.emitter.on('setActiveMenu', this.setActiveMenu)
            this.emitter.on('setSidebarState', this.setSidebarState)
            this.emitter.on('setFormName', this.setFormName)
      }
})
</script>