<template>
      <div class="w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            <div class="w-full justify-between grid grid-cols-3 gap-7">
                  <text-input ref="title" @input="setFormTitle" :details="{ type:'text', label:'Form Title', placeholder:'Enter form title...', isRequired: true }" v-model="form.title"/>
                  <select-input ref="accessLevel" v-model="form.role" :details="{ label: 'Form Access Level', isRequired: true, options: roles, placeholder: 'Select form access level' }"/>
                  <div class="flex justify-between items-center mt-5">
                        <check-box class="mb-2" :details="{ label: 'Is editable' }" v-model="form.isEditable" />
                        <check-box class="mb-2" :details="{ label: 'Is deletable' }" v-model="form.isDeletable" />
                  </div>
                  <!-- ## Enter new fields here using  FieldGenerator component-->
                  <field-generator @handleModalState="handleModalState" @input="handleValue($event, component.label)" v-for="(component, index) in form.fields" :details="component" :key="`component-${index}`"></field-generator>
                  <alert class="alert" v-if="showAlert" :message="alert.message" :type="alert.type" />
            </div>
            <Modal @close="handleModalState(false)" v-show="openFormModal"/>
      </div>
      <div class="flex w-full justify-center mt-3">
            <btn @click="handleModalState(true)" bgColor="blue" textColor="black" class="self-center font-bold" text="Add Field"/>
            <btn @click.prevent="validateForm" bgColor="green" textColor="black" class="self-center font-bold ml-3" text="Submit"/>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import SelectInput from '@/components/shared/BaseSelect/Select.vue';
import TextInput from '@/components/shared/BaseFormElements/TextInput/TextInput.vue';
import Btn from '@/components/shared/BaseButton/Button.vue';
import Modal from './FormBuilderModal.vue';
import FieldGenerator from '../FieldGenerator/index.vue';
import Alert from '@/components/shared/BaseAlert/Alert.vue'
import CheckBox from '@/components/shared/BaseFormElements/CheckBoxInput/CheckBoxInput.vue'

import { generateUniqueId as uuid } from '@/utils';

export default defineComponent({
      components: { SelectInput, Btn, TextInput, Modal, FieldGenerator, Alert, CheckBox },
      data(){
            return {
                  roles : [
                        { name: 'Admin', value: 'admin' },
                        { name: 'Guest', value: 'guest' }
                  ],
                  actions: [
                        { name: 'Delete', action: 'delete' },
                        { name: 'Edit', action: 'edit' },
                        { name: 'New', action: 'new' }
                  ],
                  form: {
                        title: '',
                        role: '',
                        isEditable: false,
                        isDeletable: false,
                        fields: [] as any
                  } as any,
                  openFormModal: false,
                  hasError: false,
                  showAlert: false,
                  alert : {
                        type: '',
                        message: ''
                  }
            }
      },
      watch: {

      },
      computed: {
            // form(){
            //       if(localStorage.getItem('currentFormId') && localStorage.getItem('form')){
            //             const id : string = localStorage.getItem('currentFormId')!;
            //             const forms : any = JSON.parse(localStorage.getItem('form')!);
            //             const currentForm = forms.find((item: any) => item.id === id);
            //             // this.form = {...currentForm};
            //             return currentForm
            //       } else return {
            //             title: '',
            //             role: '',
            //             isEditable: false,
            //             isDeletable: false,
            //             fields: [] as any
            //       }
            // }
      },
      methods: {
            async forceRerender() {
                  this.componentKey += 1;
            },
            handleValue(e: Event | any, prop: { [key: string]: string}){
                  let currentItem = this.form.fields.find(item => item.label === prop);
                  currentItem['value'] = e.target.value
                  return
            },
            addField(args: any){
                  // console.log(args.field, args.editingMode)
                  if(!args.editingMode){
                        // Push new item to array
                        console.log(args)
                        this.form.fields.push(args.field);
                  } else {
                        // Edit existing item
                        const id = args.field.id;
                        const index = this.form.fields.map(function(e) { return e.id; }).indexOf(id);
                        this.form.fields.splice(index, 1, args.field);
                  }
                  this.handleModalState(false)
            },
            handleAlert( obj: { type: string, message: string } ){
                  const { type, message } = obj;
                  this.alert.type = type;
                  this.alert.message = message;
                  this.showAlert = true;
                  setTimeout(() => {
                        this.showAlert = false
                  }, 3000);
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
                  !this.hasError && this.submitForm()
            },
            getExistingForms(): []{
                  // Retrieve the form data from local storage
                  return JSON.parse(localStorage.getItem('form')!) || [];
            },
            submitForm(){
                  if(this.form.fields.length < 1){
                        this.handleAlert({ type: 'error', message: 'Form must have 1 field at least.'})
                        return
                  }
                  // Define the array of forms
                  const forms: any[] = this.getExistingForms();

                  // Existance of id means the mode is edit
                  const id : string = localStorage.getItem('currentFormId')!;
                  if(id){
                        let currentForm = forms.find((i : any) => i.id === id);
                        Object.assign(currentForm, this.form);
                  } else {
                        forms.push({...this.form, id: uuid()});
                  }
                  
                  localStorage.removeItem('form');
                  localStorage.removeItem('currentFormId');
                  // Save the updated array to local storage
                  localStorage.setItem('form', JSON.stringify(forms));

                  //Change component to list of forms;
                  this.emitter.emit('setCurrentItem', 'Forms')
                  this.handleAlert({ type: 'success', message: 'Form submitted successfully.'})
            },
            setFormTitle(){
                  // Set title for form and add to Main component ot show in UI.
                  this.emitter.emit('setFormName', this.form.title &&`${this.form.title} Form`)
            },
            handleModalState(state: boolean, action?: string, details?: any){
                  this.openFormModal = state;
                  if(action === 'edit'){
                        this.emitter.emit('setAvailableFormDetails', details);
                  } else if(action === 'delete') {
                        const id = details?.id;
                        const index = this.form.fields.map(function(e : any) { return e.id }).indexOf(id);
                        this.form.fields.splice(index, 1);
                  }
            },
            checkLocalStorage(){
                  localStorage.getItem('currentFormId') && this.setCurrentFormDetails();
            },
            setCurrentFormDetails(){
                  const id : string = localStorage.getItem('currentFormId')!;
                  const forms : any = JSON.parse(localStorage.getItem('form')!);
                  const currentForm = forms.find((item: any) => item.id === id);
                  this.form = {...currentForm};
            }
      },
      mounted(){
            this.checkLocalStorage();
            this.emitter.on('addFormFields', this.addField);
      }

})
</script>

<style>
.alert {
      position: absolute;
      top: 5%;
      left: 50%;
}
</style>