<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/core/Sidebar/Sidebar.vue';
import Menu from '@/components/core/Main/Main.vue';

export default defineComponent({
      components: {
            Sidebar,
            Menu
      }
})
</script>

<template>
      <div class="flex w-full h-screen overflow-hidden">
            <Sidebar />
            <Menu/>
      </div>
</template>

<style scoped>
</style>
