<template>
      <modal>
            <p class="text-lg font-bold mb-2 text-center">Add new field to form</p>
            
            <select-input ref="fieldType" class="mb-2" @input="handleComponentSelection" :details="{ isRequired: true, label : 'Field Type', options: componentNames, placeholder: 'Select field type' }" v-model="fieldProperties.selectedComponent"/>

            <text-input v-if="showRadioFields" ref="radioOptions" :details="{ isRequired: true, label : 'Radio option', placeholder: 'Enter radio option...', type: 'text' }" v-model="radioOption"/>
            <div v-if="fieldProperties.radioOptions && showRadioFields">
                  <p class="relative text-sm p-2 bg-white text-black border-dashed border-2 rounded my-2 inline-block mr-3" v-for="(item, index) in fieldProperties.radioOptions" :key="`option-${index}`">
                        {{ item }}
                        <img @click="removeRadioOption(index)" class="absolute top-0 right-0 cursor-pointer -m-2" width="20" height="20" src="@/assets/images/icons/svg/cancel.svg" alt="cancel">
                  </p>
            </div>
            <div v-show="isComponent(['RadioInput'])" class="actions flex justify-start text-sm text-white font-bold my-2">
                  <btn :disabled="showRadioFields && !radioOption" @click.prevent="!showRadioFields ? showRadioFields = true : addRadioOption()" bgColor="blue" text="Add option"/>
                  <btn v-show="showRadioFields" @click.prevent="showRadioFields = !showRadioFields" class="ml-2" bgColor="red" text="Close"/>
            </div>
            
            <text-input ref="label" :details="{isRequired: true, label : 'Label', placeholder: 'Enter label...', type: 'text' }" v-model="fieldProperties.label"/>

            <select-input v-show="isComponent(['NumberInput'])" class="mb-2" :details="{ isRequired: true, label : 'Format', options: formats, placeholder: 'Select format' }" v-model="fieldProperties.format"/>

            <text-input v-if="isComponent(['TextInput', 'DateRangeInput'])" :details="{isRequired: true, label : 'Placeholder', placeholder: 'Enter placeholder...', type: 'text' }" ref="placeholder" v-model="fieldProperties.placeholder"/>
            
            <select-input v-show="isComponent(['TextInput'])" :details="{ isRequired: true, label : 'Validation', options: validations, placeholder: 'Select validations' }" class="mb-2" v-model="fieldProperties.validation"/>
            
            <description v-show="isComponent(['TextInput'])" class="mb-2" :details="{label:'Descriptions' , placeholder:'Enter description...', maxLength:'200' }" v-model="fieldProperties.description"/>
            <text-input v-if="isComponent(['Textarea'])" :details="{ isRequired: true, isNumber: true, label : 'Max length', placeholder: 'Enter max length...', type: 'number' }" ref="maxLength" v-model="fieldProperties.maxLength"/>
            
            <select-input class="mb-2" v-model="fieldProperties.role" :details="{ isRequired: true, label : 'Form Access Level', options: roles, placeholder: 'Select access level' }"/>
            
            <div class="flex justify-between my-4">
                  <check-box class="mb-2" :details="{ label: 'Is required' }" v-model="fieldProperties.isRequired" />
                  <check-box class="mb-2" :details="{ label: 'Is editable' }" v-model="fieldProperties.isEditable" />
                  <check-box class="mb-2" :details="{ label: 'Is deletable' }" v-model="fieldProperties.isDeletable" />
            </div>

            <div class="actions flex justify-center">
                  <btn @click.prevent="validateForm" bgColor="green" textColor="black" class="self-center font-bold" :text="editingMode ? 'Confirm edit' : 'Add Field'"/>
                  <btn v-on:click.prevent="resetForm" @click.prevent="$emit('close')" bgColor="red" textColor="black" class="self-center font-bold ml-5" text="Close"/>
            </div>
            <alert class="alert" v-if="showAlert" :message="alert.message" :type="alert.type" />
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
      import Alert from '@/components/shared/BaseAlert/Alert.vue'

      import { validations } from '@/constants';
      import { generateUniqueId as uuid } from '@/utils';

      export default defineComponent({
            name: 'form-builder-modal',
            components: { Modal, SelectInput, CheckBox, Btn, TextInput, Description, Alert },
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
                              { name: 'None', value: "NUMBER"},
                              { name: 'Currency - USD', value: "USD"},
                              { name: 'Currency - EUR', value: "EUR"}
                        ],
                        fieldProperties: {
                              selectedComponent: '',
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
                        radioOption: '',
                        hasError: false,
                        showRadioFields: false,
                        showAlert: false,
                        alert: {
                              message: '',
                              // Type can be ['info', 'success', 'warning', 'error']
                              type: ''
                        },
                        editingMode: false
                  }
            },
            methods: {
                  isComponent(names: string[]): boolean{
                        const checker = names.some( name => {
                              return this.fieldProperties.selectedComponent === name
                        })
                        return checker
                  },
                  handleComponentSelection(){
                        this.showRadioFields = false;
                        delete this.fieldProperties['radioOptions'];
                  },
                  handleAlert( obj: { type: string, message: string } ){
                        const { type, message } = obj;
                        this.alert.type = type;
                        this.alert.message = message;
                        this.showAlert = true;0
                        setTimeout(() => {
                              this.showAlert = false
                        }, 3000);
                  },
                  addRadioOption(){
                        // Create an array if there is no array in fieldProperties
                        if(!this.fieldProperties['radioOptions']) this.fieldProperties['radioOptions'] = new Array();

                        if (this.fieldProperties['radioOptions'].length > 3) {
                              // Too many items
                              this.handleAlert({ type: 'error', message: '"For many items use select input instead.'})
                              return
                        } else if (this.fieldProperties['radioOptions'].includes(this.radioOption)){
                              // Duplicate option condition
                              this.handleAlert({ type: 'error', message: 'Duplicate item'})
                              return
                        }
                        // If there was no error, the option will be pushed to options array
                        this.fieldProperties['radioOptions'].push(this.radioOption);
                  },
                  removeRadioOption(i: number){
                        this.fieldProperties['radioOptions'].splice(i, 1);
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
                              selectedComponent: '',
                              isRequired: false
                        }
                        this.hasError = this.editingMode = this.showRadioFields = false;
                  },
                  submitForm(){
                        /* Check for any errors in the form if the selected component is radio options */
                        if(this.fieldProperties.selectedComponent === "RadioInput" && (!this.fieldProperties.hasOwnProperty('radioOptions') || this.fieldProperties['radioOptions']?.length < 2)) {
                              this.handleAlert({ type: 'error', message: 'Option must be at least two items.'})
                              return
                        }
                        /* Check for any errors in the form */
                        if( this.hasError || !this.fieldProperties.selectedComponent) return
                        this.emitter.emit('addFormFields', {field: {...this.fieldProperties, id: this.fieldProperties?.id || uuid()}, editingMode: this.editingMode});
                        this.resetForm();
                  },
                  setAvailableFormDetails(details: object){
                        this.fieldProperties = {...details};
                        this.editingMode = true;
                  }
            },
            mounted(){
                  this.emitter.on('setAvailableFormDetails', this.setAvailableFormDetails)
            }
      })
</script>

<style>
      .alert {
            position: absolute;
            transform: translate(-50%, -50%);
            top: -10%;
            left: 50%;
            width: max-content;
      }
</style>