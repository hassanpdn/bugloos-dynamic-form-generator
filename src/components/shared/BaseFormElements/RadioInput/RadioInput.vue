<template>
      <div class="flex flex-col">
            <label class="text-sm" :for="details?.label">{{ details?.label}}</label>
            <div class="flex">
                  <label :id="details?.label" v-for="(option, index) in details?.radioOptions" :key="`radio-${index}`" class="inline-flex cursor-pointer items-center mr-4">
                        <input
                              type="radio"
                              :name="details?.label"
                              :value="option"
                              @input="handleInput"
                              class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        >
                        <span class="ml-2 text-gray-700">{{ option }}</span>
                  </label>
            </div>
      </div>
    </template>
    
    <script lang="ts">
    import { defineComponent, PropType } from 'vue';
    
    export default defineComponent({
            props: {
                  details:{
                        type: Object as PropType<{[key: string]: string}>
                  }
            },
            methods: {
                  handleInput(e: Event) {
                        this.$emit('update:modelValue', (e.target as HTMLInputElement).value)
                  }
            },
      });
    </script>