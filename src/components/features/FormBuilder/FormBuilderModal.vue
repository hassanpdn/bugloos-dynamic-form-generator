<template>
      <modal>
            <form class="flex flex-col justify-center" @submit.prevent="submitForm" action="">
                  <p class="text-lg font-bold mb-3 text-center">Add new field to form</p>
                  <select-input class="mb-3" v-model="fieldProperties.selectedComponent" label="Field Type" :options="componentNames"/>
                  <select-input v-show="fieldProperties.selectedComponent === 'NumberInput'" class="mb-3" v-model="fieldProperties.format" label="Format" :options="formats"/>
                  <text-input type="text" validation="Enter placeholder" class="mb-3" label="Placeholder" placeholder="Enter placeholder..." v-model="fieldProperties.placeholder"/>
                  <select-input class="mb-3" v-model="fieldProperties.selectedComponent" label="Validation" :options="validations"/>
                  <description class="mb-3" label="Descriptions" placeholder="Enter description..." v-model="fieldProperties.description" :maxLength="200"/>
                  <check-box class="mb-3" label="Is required?" v-model="fieldProperties.isRequired" />

                  <div class="actions flex justify-center">
                        <Button @click="submitForm" bgColor="green" textColor="black" class="self-center font-bold" text="Submit Form"/>
                        <Button @click="$emit('close')" bgColor="red" textColor="black" class="self-center font-bold ml-5" text="Cancel"/>
                  </div>
            </form>
            <span v-if="formSubmitted">{{ fieldProperties }}</span>
      </modal>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import Modal from "@/components/shared/BaseModal/Modal.vue";
      import SelectInput from '@/components/shared/BaseSelect/Select.vue';
      import TextInput from '@/components/shared/BaseFormElements/TextInput/TextInput.vue';
      import Description from '@/components/shared/BaseFormElements/Textarea/Textarea.vue';
      import CheckBox from '@/components/shared/BaseFormElements/CheckBoxInput/CheckBoxInput.vue';
      import Button from '@/components/shared/BaseButton/Button.vue';

      export default defineComponent({
            name: 'form-builder-modal',
            components: { Modal, SelectInput, CheckBox, Button, TextInput, Description },
            data(){
                  return {
                        componentNames: [
                              { name: 'Checkbox', value: 'CheckBoxInput' },
                              { name: 'Date', value: 'DateInput' },
                              { name: 'Number', value: 'NumberInput' },
                              { name: 'Radio', value: 'RadioInput' },
                              { name: 'Textarea', value: 'Textarea' },     
                        ],
                        validations: [
                              { name: 'Email', value: '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/' },
                              { name: 'Phone', value: '"^(\\+98|0)?9\\d{9}$"' },
                              { name: 'Number', value: '/^\d+$/' },
                              { name: 'Text', value: '/^[A-Za-z\s]*$/' },
                              { name: 'Text and number', value: '/^[A-Za-z0-9]*$/' }
                        ],
                        formats: [
                              { name: 'Dollars', value: "en-US"},
                              { name: 'Rupees', value: "en-IN"},
                              { name: 'Euros', value: "de-DE"}
                        ],
                        fieldProperties: {
                              selectedComponent: 'Select Form Element',
                              isRequired: false,
                              placeholder: '',
                              description: '',
                              validation: '',
                              format: ''
                        },
                        formSubmitted: false
                  }
            },
            methods: {
                  submitForm(){
                        this.formSubmitted = !this.formSubmitted
                  }
            }
      })
</script>

<style>
</style>;