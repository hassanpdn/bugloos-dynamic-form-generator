<template>
      <div>
            <FormBuilder/>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import FormBuilder from '@/components/features/FormBuilder/FormBuilder.vue';

export default defineComponent({
      components: {
            FormBuilder
      }
})
      
</script>