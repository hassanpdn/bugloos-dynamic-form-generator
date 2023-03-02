<template>
      <modal>
            <form class="flex flex-col justify-center">
                  <p class="text-lg font-bold mb-2 text-center">Add new field to form</p>
                  
                  <select-input class="mb-2" v-model="fieldProperties.selectedComponent" label="Field Type" :options="componentNames"/>

                  <text-input ref="label" :details="{isRequired: true, label : 'Label', placeholder: 'Enter label...', type: 'text' }" v-model="fieldProperties.label"/>

                  <select-input v-show="isComponent(['NumberInput'])" class="mb-2" v-model="fieldProperties.format" label="Format" :options="formats"/>

                  <text-input v-if="isComponent(['TextInput'])" :details="{isRequired: true, label : 'Placeholder', placeholder: 'Enter placeholder...', type: 'text' }" ref="placeholder" v-model="fieldProperties.placeholder"/>
                  
                  <select-input v-show="isComponent(['TextInput'])" class="mb-2" v-model="fieldProperties.validation" label="Validation" :options="validations"/>
                  
                  <description v-show="isComponent(['TextInput'])" class="mb-2" label="Descriptions" placeholder="Enter description..." v-model="fieldProperties.description" :maxLength="200"/>
                  
                  <select-input class="mb-2" v-model="fieldProperties.role" label="Form Access Level" :options="roles"/>
                  
                  <check-box class="mb-2" :details="{ label: 'isRequired', isRequired: true }" label="Is required?" v-model="fieldProperties.isRequired" />

                  <div class="actions flex justify-center">
                        <btn @click="validateForm" bgColor="green" textColor="black" class="self-center font-bold" text="Add"/>
                        <btn v-on:click.prevent="resetForm" @click.prevent="$emit('close')" bgColor="red" textColor="black" class="self-center font-bold ml-5" text="Close"/>
                  </div>
            </form>
      </modal>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import Modal from "@/components/shared/BaseModal/Modal.vue";
      import SelectInput from '@/components/shared/BaseSelect/Select.vue';
      import TextInput from '@/components/shared/BaseFormElements/TextInput/TextInput.vue';
      import Description from '@/components/shared/BaseFormElements/Textarea/Textarea.vue';
      import CheckBox from '@/components/shared/BaseFormElements/CheckBoxInput/CheckBoxInput.vue';
      import Btn from '@/components/shared/BaseButton/Button.vue';
      import { validations } from '@/constants';

      export default defineComponent({
            name: 'form-builder-modal',
            components: { Modal, SelectInput, CheckBox, Btn, TextInput, Description },
            data(){
                  return {
                        componentNames: [
                              { name: 'Checkbox', value: 'CheckBoxInput' },
                              { name: 'Date', value: 'DateInput' },
                              { name: 'DateRange', value: 'DateRangeInput' },
                              { name: 'Number', value: 'NumberInput' },
                              { name: 'Radio', value: 'RadioInput' },
                              { name: 'Description', value: 'Textarea' },     
                              { name: 'Text', value: 'TextInput' },     
                        ],
                        formats: [
                              { name: 'Price', value: "price"},
                              { name: 'Phone', value: "phone"},
                              { name: 'Weight', value: "weight"},
                              { name: 'Height', value: "height"}
                        ],
                        fieldProperties: {
                              selectedComponent: 'Select Form Element',
                              isRequired: false
                        } as any,
                        roles : [
                              { name: 'Admin', value: 'admin' },
                              { name: 'Guest', value: 'guest' }
                        ],
                        validations : [
                              { name: 'Email', value: 'Email' },
                              { name: 'Phone', value: 'Phone' },
                              { name: 'Text', value: 'Text' },
                              { name: 'Required', value: 'Required' },
                        ],
                        hasError: false
                  }
            },
            methods: {
                  isComponent(names: string[]): boolean{
                        const checker = names.some( name => {
                              return this.fieldProperties.selectedComponent === name
                        })
                       return checker
                  },
                  validateForm(e: Event){
                        e.preventDefault();
                        this.checkForErrors();
                  },
                  checkForErrors(){
                        const refs = this.$refs;
                        const errors : boolean[] = [];
                        Object.keys(refs).forEach( key => {
                              const ref = refs[key] as any;
                              if( !ref ) return;
                              ref.setValidators();
                              errors.push(ref.hasError)
                        })
                        this.hasError = errors.some(i => i);
                        this.submitForm()
                  },
                  resetForm(){
                        this.fieldProperties = {
                              selectedComponent: 'Select Form Element',
                              isRequired: false
                        }
                        this.hasError = false;
                  },
                  submitForm(){
                        /* Check for any errors in the form */
                        if( this.hasError ) return
                        this.emitter.emit('addFormFields', this.fieldProperties);
                        this.resetForm();
                  }
            }
      })
</script>

<style>
</style>;