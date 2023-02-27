<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      props: {
            placeholder: {
                  type: String as PropType<string>,
                  default: ''
            },
            isRequired: {
                  type: Boolean as PropType<boolean>,
                  default: ''
            }
      }
})
</script>

<template>
      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" :placeholder="placeholder" :required="isRequired">
</template>
