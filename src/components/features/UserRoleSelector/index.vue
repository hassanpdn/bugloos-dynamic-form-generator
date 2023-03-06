<template>
      <div class="flex flex-col justify-center items-center">
            <h1 class="text-3xl mb-6">Welcome to the Bugloos Dynamic Form Generator!</h1>
            <h2 class="text-2xl mb-6">Set your role to enter!</h2>
            <div class="flex">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" @click="setUserRole('admin')">Admin</button>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="setUserRole('staff')">Staff</button>
            </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { userStore } from '@/store/User.store';

export default defineComponent({
      name: 'Home',
      methods: {
            setUserRole(userRole: string) {
                  const store = userStore();
                  store.user = userRole;
            }
      }
})
</script>