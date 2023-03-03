<template>
      <div class="w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            <div class="w-full justify-between grid grid-cols-3 gap-7">
                  <text-input @input="setFormTitle" :details="{ type:'text', label:'Form Title', placeholder:'Enter form title...', isRequired: true }" v-model="form.title"/>
                  <select-input v-model="form.role" :details="{label: 'Form Access Level', options: roles, placeholder: 'Select form access level'}"/>
                  <!-- ## Enter new fields here using  FieldGenerator component-->
                  <field-generator @input="handleValue($event, component.label)" v-for="(component, index) in form.fields" :details="component" :key="`component-${index}`">
                        <template #actions>
                              <h1>123123</h1>
                        </template>
                  </field-generator>
                  
            </div>
            <Modal @close="openFormModal = false" v-show="openFormModal"/>
      </div>
      <div class="flex w-full justify-center mt-3">
            <btn @click="openFormModal = true" bgColor="blue" textColor="black" class="self-center font-bold" text="Add Field"/>
            <btn @click.prevent="submitForm" bgColor="green" textColor="black" class="self-center font-bold ml-3" text="Submit"/>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import SelectInput from '@/components/shared/BaseSelect/Select.vue';
import TextInput from '@/components/shared/BaseFormElements/TextInput/TextInput.vue';
import Btn from '@/components/shared/BaseButton/Button.vue';
import Modal from './FormBuilderModal.vue';
import FieldGenerator from '../FieldGenerator/index.vue';

export default defineComponent({
      components: { SelectInput, Btn, TextInput, Modal, FieldGenerator },
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
                        allowedActions: [] as object[],
                        fields: [] as Array<any>
                  },
                  openFormModal: false
            }
      },
      methods: {
            handleValue(e: Event | any, prop: { [key: string]: string}){
                  let currentItem = this.form.fields.find(item => item.label === prop);
                  currentItem['value'] = e.target.value
                  return
            },
            addField(field: []){
                  this.form.fields.push(field);
                  this.openFormModal = false;
            },
            submitForm(){
                  console.log('submission')
            },
            setFormTitle(){
                  // Set title for form and add to Main component ot show in UI.
                  this.emitter.emit('setFormName', this.form.title &&`${this.form.title} Form`)
            }
      },
      mounted(){
            this.emitter.on('addFormFields', this.addField)
      }

})
</script>