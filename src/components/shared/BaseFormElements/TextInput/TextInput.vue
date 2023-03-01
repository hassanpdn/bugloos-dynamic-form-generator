<template>
      <div class="input-wrapper mb-2">
            <label class="text-sm" :for="placeholder">{{ label }}</label>
            <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  :placeholder="placeholder"
                  :value="modelValue"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                  v-bind="$attrs"
                  :id="placeholder"
                  :type="type"
                  @blur="validateInput"
            />
            <span v-for="(error, index) in errors" :key="`error-${index}`" class="text-sm text-red-400">- Please enter a {{ error }}</span>
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
                  showAlert: false,
                  errors: [] as string[],
                  validations: validations as Validations[],
                  validationMetrics: validationMetrics as Validations[],
                  currentValidations: [] as string[]
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
                  type: [String, Number] as PropType<string | number>,
                  default: "",
                  required: true
            },
            required: {
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
                  const validators : string[] = this.currentValidations;
                  console.log(validators)
                  // (this.required && this.modelValue === '') ? (this.errors.push('value')) : this.errors.splice(this.errors.indexOf('value'));
                  // /** @ValidateEmail **/
                  
                  
                  // if(this.required) validationMetrics.push('Required');
                  // if(this.isEmail) validationMetrics.push('Email');
                  // if(this.isPhoneNumber) validationMetrics.push('Phone');
                  // if(this.isNumber) validationMetrics.push('Number');
                  // if(this.isText) validationMetrics.push('Text');
                  // if(this.isTextAndNumber) validationMetrics.push('Text and number');
                  // (this.isEmail && this.regexTester(this.modelValue , this.validations.find(({ name }) => name === "Email")!.value))
                  // console.log(this.regexTester(this.validations.find(({ name }) => name === "Email")!.value, this.modelValue))
            },
            regexTester(regex: any, value: any) {
                  const reg = new RegExp(regex);
                  return reg.test(value)
            }
      }
})
</script>