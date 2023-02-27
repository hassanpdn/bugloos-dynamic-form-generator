<template>
      <div class="sidebar fixed h-screen flex flex-col justify-between items-center z-40" :class="computedClass">
            <p class="font-bold mt-5">Dynamic Form Generator</p>
            <Menu/>
            <img class="w-2/6 mb-5" src="https://bugloos.nl/wp-content/uploads/Bugloos-Logo.svg" alt="open">
      </div>
      <button class="fixed left-0 top-0 z-50" @click="setSidebarState">
            <img width="40" height="40" v-if="isOpen" class="m-4" src="@/assets/images/icons/svg/open.svg" alt="open">
            <img width="40" height="40" v-else class="m-4" src="@/assets/images/icons/svg/close.svg" alt="close">
      </button>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import Menu from './SidebarMenu.vue'

      export default defineComponent({
            name: 'sidebar',
            components: { Menu },
            data(){
                  return {
                        isOpen: true as Boolean
                  }
            },
            methods: {
                  closeMenu(): void {
                        this.isOpen = false
                  },
                  setSidebarState(): void {
                        this.isOpen = !this.isOpen;
                        this.emitter.emit('setSidebarState', this.isOpen)
                  }
            },
            computed: {
                  computedClass() : string {
                        return this.isOpen ? 'opened-sidebar' : 'closed-sidebar';
                  }
            }
      })
</script>

<style>
.sidebar {
      position: relative;
      width: 25%;
      @apply bg-blue-50;
}

.opened-sidebar {
      left: 0%;
      transition: all ease .2s;
}

.closed-sidebar {
      left: -25%;
      transition: all ease .2s;
}
</style>