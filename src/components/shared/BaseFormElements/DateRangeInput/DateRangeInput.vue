<template>
      <div>
            <label class="text-sm">{{ details?.label }}</label>
            <VueDatePicker v-model="date" range></VueDatePicker>
      </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      name: 'date-range-input',
      data(){
            return {
                  date: []
            }
      },
      props: {
            details: {
                  type: Object as PropType<any>
            },
      }
})
</script>

<style scoped>
</style>
