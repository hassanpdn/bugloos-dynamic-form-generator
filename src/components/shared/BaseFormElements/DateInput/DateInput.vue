<template>
      <div>
            <label class="text-sm">{{ details?.label }}</label>
            <VueDatePicker placeholder="Set date..." v-model="date"></VueDatePicker>
      </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      data(){
            return {
                  date: ''
            }
      },
      props: {
            details: {
                  type: Object as PropType<any>
            },
      }
})
</script>

<style>
.dp__input { 
      @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-8
}
</style>
