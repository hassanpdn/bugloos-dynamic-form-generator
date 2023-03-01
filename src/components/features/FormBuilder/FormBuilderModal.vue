<template>
      <modal>
            <form class="flex flex-col justify-center">
                  <p class="text-lg font-bold mb-2 text-center">Add new field to form</p>
                  <select-input class="mb-2" v-model="fieldProperties.selectedComponent" label="Field Type" :options="componentNames"/>
                  <text-input required isEmail isPhoneNumber type="text" label="Label" placeholder="Enter label..." v-model="fieldProperties.label"/>
                  <select-input v-show="fieldProperties.selectedComponent === 'NumberInput'" class="mb-2" v-model="fieldProperties.format" label="Format" :options="formats"/>
                  <text-input required isEmail type="text" label="Placeholder" placeholder="Enter placeholder..." v-model="fieldProperties.placeholder"/>
                  <select-input v-show="fieldProperties.selectedComponent === 'TextInput'" class="mb-2" v-model="fieldProperties.validation" label="Validation" :options="validations"/>
                  <description class="mb-2" label="Descriptions" placeholder="Enter description..." v-model="fieldProperties.description" :maxLength="200"/>
                  <select-input class="mb-2" v-model="fieldProperties.selectedComponent" label="Form Access Level" :options="roles"/>

                  <check-box class="mb-2" label="Is required?" v-model="fieldProperties.isRequired" />

                  <div class="actions flex justify-center">
                        <btn @click="submitForm" bgColor="green" textColor="black" class="self-center font-bold" text="Add field"/>
                        <btn @click="$emit('close')" bgColor="red" textColor="black" class="self-center font-bold ml-5" text="Cancel"/>
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
                              isRequired: false,
                              placeholder: '',
                              description: '',
                              validation: '',
                              format: '',
                              label: ''
                        },
                        roles : [
                              { name: 'Admin', value: 'admin' },
                              { name: 'Guest', value: 'guest' }
                        ],
                        validations : [
                              { name: 'Email', value: 'email' },
                              { name: 'Phone', value: 'phone' },
                              { name: 'Number', value: 'number' },
                              { name: 'Text', value: 'text' },
                              { name: 'Text and number', value: 'textAndNumber' }
                        ]
                  }
            },
            methods: {
                  submitForm(){
                        this.emitter.emit('addFormFields', this.fieldProperties)
                  }
            }
      })
</script>

<style>
</style>;