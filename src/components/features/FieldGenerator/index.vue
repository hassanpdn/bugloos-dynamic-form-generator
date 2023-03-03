<template>
      <div class="flex relative">
            <component v-model="customValue" :is="details.selectedComponent" v-bind="{ details }">
            </component>
            <div class="actions flex absolute top-0 right-0">
                  <img v-show="details?.isEditable" width="24" height="24" class="opacity-50 hover:opacity-100 cursor-pointer" :class="{'ml-2': details?.isDeletable}" src="@/assets/images/icons/svg/edit.svg" alt="edit">
                  <img v-show="details?.isDeletable" width="24" height="24" class="opacity-50 hover:opacity-100 cursor-pointer" src="@/assets/images/icons/svg/delete.svg" alt="delete">
            </div>
      </div>
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