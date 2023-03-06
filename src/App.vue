<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/core/Sidebar/Sidebar.vue';
import Menu from '@/components/core/Main/Main.vue';
import { mapState } from 'pinia'
import { userStore } from '@/store/User.store';

export default defineComponent({
      components: {
            Sidebar,
            Menu
      },
      computed: {
            ...mapState(userStore, {userRole: 'user'})
      }
})
</script>

<template>
      <div class="flex w-full h-screen overflow-hidden">
            <Sidebar />
            <Menu />
      </div>
</template>

<style scoped>
</style>
