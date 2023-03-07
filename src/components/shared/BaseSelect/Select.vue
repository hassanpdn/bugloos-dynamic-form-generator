<template>
      <div>
            <label class="text-sm" for="select">{{ details?.label }}</label>
            <select id="select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" :value="modelValue" @change="validateField" @select="validateField" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
                  <option value="" disabled selected>{{ details?.placeholder }}</option>
                  <template v-for="(option, optionIdx) in details?.options" :key="optionIdx" >
                        <option :value="option.value ?? option" v-text="option.name?? option"></option>
                  </template>
            </select>
            <p v-for="(error, index) in errors" :key="`error-${index}`" class="text-sm text-red-400">- Please enter a {{ error }}</p>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { i_Validation } from '@/mixins/i_Validation';

export default defineComponent({
      mixins: [ i_Validation ],
      props: { ...i_Validation.props }
})
</script>