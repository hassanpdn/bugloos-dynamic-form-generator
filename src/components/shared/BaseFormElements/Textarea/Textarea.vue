<template>
      <div class="text-area-wrapper">
            <label class="text-sm" :for="details?.placeholder">{{ details?.label }}</label>
            <textarea
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-10 resize-none"
                  :placeholder="details?.placeholder"
                  :value="modelValue"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                  v-bind="$attrs"
                  :id="details?.placeholder"
                  :maxlength="details?.maxLength"
                  @blur="validateField"
                  @keyup="validateField"
            >
            </textarea>
            <p v-for="(error, index) in errors" :key="`error-${index}`" class="text-sm text-red-400">- Please enter a {{ error }}</p>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { i_Validation } from '@/mixins/i_Validation';

export default defineComponent({
      mixins: [i_Validation],  
      props: {...i_Validation.props}
})
</script>
