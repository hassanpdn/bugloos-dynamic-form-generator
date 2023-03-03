<template>
      <component v-model="customValue" :is="details.selectedComponent" v-bind="{ details }">
            <slot name="actions"/>
      </component>
</template>

<script lang="ts">

import { defineComponent, defineAsyncComponent, PropType } from 'vue';
export default defineComponent({
      data(){
            return {
                  customValue: ''
            }
      },
      props: {
            details : {
                  type: Object as PropType<any>,
                  default: ''
            }
      },
      components: {
            CheckBoxInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/CheckBoxInput/CheckBoxInput.vue')),
            NumberInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/NumberInput/NumberInput.vue')),
            DateInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/DateInput/DateInput.vue')),
            DateRangeInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/DateRangeInput/DateRangeInput.vue')),
            RadioInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/RadioInput/RadioInput.vue')),
            TextInput: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/TextInput/TextInput.vue')),
            Textarea: defineAsyncComponent(() => import('@/components/shared/BaseFormElements/Textarea/Textarea.vue'))
      }
})
</script>