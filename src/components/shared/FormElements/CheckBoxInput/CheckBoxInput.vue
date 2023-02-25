<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
      props: {
            text: {
                  type: String as PropType<string>,
                  required: true
            }
      }
})
</script>

<template>
      <div>
            {{ text }}
      </div>
</template>

<style scoped>
</style>
