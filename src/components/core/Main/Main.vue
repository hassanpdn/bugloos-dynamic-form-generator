<template>
      <div class="main-content h-screen w-full p-16 flex flex-col justify-center items-center">
            <h1 v-if="currentComponent !== 'Role'" class="font-bold text-2xl mb-2 text-left w-full">{{ action === 'Edit' ? action : currentComponent }} {{ formName }}</h1>
            <component :is="currentComponent"></component>
      </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { userStore } from '@/store/User.store';
import { mapState } from 'pinia';

export default defineComponent({
      components: {
            Forms: defineAsyncComponent(() => import('@/components/features/FormLists/index.vue')),
            Create: defineAsyncComponent(() => import('@/components/features/FormBuilder/index.vue')),
            Role: defineAsyncComponent(() => import('@/components/features/UserRoleSelector/index.vue'))
      },
      data(){
            return {
                  currentComponent: 'Role',
                  formName: '',
                  isSidebarOpened: true
            }
      },
      computed: {
            ...mapState(userStore, { action : 'action' })
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
            }
      },
      mounted(){
            this.emitter.on('setActiveMenu', this.setActiveMenu)
            this.emitter.on('setSidebarState', this.setSidebarState)
            this.emitter.on('setFormName', this.setFormName)
      }
})
</script>