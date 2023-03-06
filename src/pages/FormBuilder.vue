<template>
      <FormBuilder/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import FormBuilder from '@/components/features/FormBuilder/index.vue';
import { mapState } from 'pinia'
import { useUserStore } from '../stores/users.store'

export default defineComponent({
      components: {
            FormBuilder
      },
      computed: {
            ...mapState(useUserStore, ['user'])
      }
})
      
</script>