<template>
      <component :is="selectedComponentName"></component>
</template>

<script lang="ts">

import { defineComponent, defineAsyncComponent, PropType } from 'vue';

export default defineComponent({
      props: {
            selectedComponentName : {
                  type: String as PropType<string>,
                  default: ''
            }
      },
      components: {
            Checkbox: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/CheckBoxInput/CheckBoxInput.vue')),
            NumberInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/NumberInput/NumberInput.vue')),
            DateInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/DateInput/DateInput.vue')),
            RadioInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/RadioInput/RadioInput.vue')),
            SimpleInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/SimpleInput/SimpleInput.vue')),
            Textarea: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/Textarea/Textarea.vue'))
      }
})
</script>