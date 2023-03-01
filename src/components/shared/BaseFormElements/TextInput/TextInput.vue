<template>
      <div class="input-wrapper mb-2">
            <label class="text-sm" :for="placeholder">{{ label }}</label>
            <input
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  :placeholder="placeholder"
                  :value="modelValue"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                  v-bind="$attrs"
                  :id="placeholder"
                  :type="type"
                  @keyup="setValidators"
                  @blur="setValidators"
            />
            <p v-for="(error, index) in errors" :key="`error-${index}`" class="text-sm text-red-400">- Please enter a {{ error }}</p>
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { validations } from '@/constants';
import { validationMetrics } from '@/constants';

interface Validations {
      name: string,
      value: string
}

export default defineComponent({
      data(){
            return {
                  errors: [] as string[],
                  validations: validations as Validations[],
                  validationMetrics: validationMetrics as Validations[],
                  currentValidations: [] as string[],
                  hasError: false
            }
      },   
      watch:{
            modelValue(){
                  this.setValidators()
            }
      },
      props: {
            label: {
                  type: String as PropType<string>,
            },
            placeholder: {
                  type: String as PropType<string>,
            },
            type: {
                  type: String as PropType<string>,
                  default: 'text'
            },
            modelValue: {
                  type: String as PropType<string>,
                  default: "",
                  required: true
            },
            isRequired: {
                  type: Boolean as PropType<boolean>,
                  default: false
            },
            isEmail: {
                  type: Boolean as PropType<boolean>,
                  default: false
            },
            isPhoneNumber: {
                  type: Boolean as PropType<boolean>,
                  default: false
            },
            isNumber: {
                  type: Boolean as PropType<boolean>,
                  default: false
            },
            isText: {
                  type: Boolean as PropType<boolean>,
                  default: false
            },
            isTextAndNumber: {
                  type: Boolean as PropType<boolean>,
                  default: false
            },
      },
      methods: {
            setValidators(): void{
                  let self : any = this;
                  this.currentValidations = [];
                  this.validationMetrics.forEach(i => {
                        if(self[i.name]) this.currentValidations.push(i.value)
                  })
                  this.validateInput()
            },
            validateInput() {
                  this.errors = [];
                  this.hasError = false;
                  const validators : string[] = this.currentValidations;
                  // if(this.required && this.modelValue === '') {
                  //       this.errors.push('value')
                  //       this.hasError = true;
                  // }
                  validators.forEach(v => {
                        console.log(v)
                        if(!this.regexTester(this.validations.find(({ name }) => name === v)!.value, this.modelValue)) {
                              this.errors.push(`valid ${ v === 'Required' ? 'value': v }`)
                              this.hasError = true;
                        }
                  });
            },
            regexTester(regex: any, value: string): boolean {
                  if(!value) return false
                  const reg = new RegExp(regex);
                  return reg.test(value)
            }
      }
})
</script>