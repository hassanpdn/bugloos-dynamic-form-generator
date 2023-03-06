import { defineComponent, PropType } from 'vue';
import { validations } from '@/constants';
import { validationMetrics } from '@/constants';
import { IValidations } from '@/typings/interface';

export const i_Validation =  defineComponent({
      props: {
            details: {
                  type: Object as PropType<any>
            },
            modelValue: {
                  type: [String , Boolean] as any,
                  default: "",
                  required: true
            },
            validation: {
                  type: String as PropType<string>,
                  default: ''
            }
      },
      data(){
            return {
                  errors: [] as string[],
                  validations: validations as IValidations[],
                  validationMetrics: validationMetrics as IValidations[],
                  currentValidations: [] as string[],
                  hasError: false,
                  canValidate: false
            }
      },
      watch:{
            modelValue(){
                  this.canValidate && this.setValidators()
            }
      },
      methods: {
            validateField(): void{
                  this.canValidate = true;
                  this.setValidators();
            },
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
                        if(v === 'Required'){
                              if(!this.modelValue) {
                                    console.log(this.modelValue)
                                    this.errors.push(`valid value`);
                                    this.hasError = true;
                              }
                              this.canValidate = false
                              return
                        }
                        if(!this.regexTester(this.validations.find(({ name }) => name === v)!.value, this.modelValue)) {
                              this.errors.push(`valid ${ v }`)
                              this.hasError = true;
                        }
                  })
                  this.canValidate = false;
            },
            regexTester(regex: any, value: string): boolean {
                  /** If the value is empty return false for @Required fields **/
                  if(!value || !regex) return false
                  const reg = new RegExp(regex);
                  return reg.test(value)
            }
      }
})