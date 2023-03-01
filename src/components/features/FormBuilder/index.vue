<template>
      <div class="w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            <div class="w-full justify-between grid grid-cols-3 gap-7">
                  <text-input type="text" label="Form Title" placeholder="Enter form title..." v-model="form.title"/>
                  <select-input v-model="form.role" label="Form Access Level" :options="roles"/>
                  <Button @click="openFormModal = true" bgColor="green" textColor="black" class="self-center font-bold mt-5" text="Add field"/>

            </div>
            <Modal @close="openFormModal = false" v-show="openFormModal"/>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import SelectInput from '@/components/shared/BaseSelect/Select.vue';
import TextInput from '@/components/shared/BaseFormElements/TextInput/TextInput.vue';
import Button from '@/components/shared/BaseButton/Button.vue';
import Modal from './FormBuilderModal.vue';

export default defineComponent({
      components: { SelectInput, Button, TextInput, Modal },
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
                        fields: [] as object[]
                  },
                  openFormModal: false
            }
      },
      methods: {
            addField(field: []){
                  this.form.fields.push(field);
            }
      },
      mounted(){
            this.emitter.on('addFormFields', this.addField)
      }

})
</script>