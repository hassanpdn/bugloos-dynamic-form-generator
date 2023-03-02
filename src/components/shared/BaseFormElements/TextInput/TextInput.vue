<template>
      <div class="input-wrapper mb-2">
            <label class="text-sm" :for="details?.placeholder">{{ details?.label }}</label>
            <input
                  autocomplete="off"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  :class="{'bg-slate-50': details?.disabled}"
                  :placeholder="details?.placeholder"
                  :value="modelValue"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                  :id="details?.placeholder"
                  :type="details?.type"
                  :disabled="details?.disabled"
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
            details: {
                  type: Object as PropType<any>
            },
            modelValue: {
                  type: String as PropType<string>,
                  default: "",
                  required: true
            },
            description: {
                  type: String as PropType<string>,
                  default: ''
            },
            validation: {
                  type: String as PropType<string>,
                  default: ''
            }
      },
      methods: {
            setValidators(): void{
                  let self : any = this;
                  this.currentValidations = [];

                  // Set an array of strings where each string indicates a prop which should be validated
                  this.validationMetrics.forEach(i => {
                        if(self.details[i.name]) this.currentValidations.push(i.value)
                  })
                  this.validateInput()
            },
            validateInput() {
                  this.errors = [];
                  this.hasError = false;
                  const validators : string[] = this.currentValidations;

                  // Add validations passed by field generator component
                  const _shoudHaveValidations = ['Required', this.details['validation']];
                  _shoudHaveValidations.forEach( v => (this.details['validation'] && !validators.includes(v)) && validators.push(v));

                  this.confirmValidation(validators)
            },
            confirmValidation(validators: string[]){
                  validators.forEach(v => {
                        /** @DynamicInputValidation using a regex from constants and the input value **/ 
                        if(!this.regexTester(this.validations.find(({ name }) => name === v)!.value, this.modelValue)) {
                              this.errors.push(`valid ${ v === 'Required' ? 'value': v }`)
                              this.hasError = true;
                        }
                  })
            },
            regexTester(regex: any, value: string): boolean {
                  /** If the value is empty return false for @Required fields **/
                  if(!value) return false
                  const reg = new RegExp(regex);
                  return reg.test(value)
            }
      }
})
</script>