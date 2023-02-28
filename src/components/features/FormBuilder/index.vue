<template>
      <div class="w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            <div class="w-full justify-between grid grid-cols-3 gap-7">
                  <text-input label="Form Title" placeholder="Enter form title..." v-model="title"/>
                  <select-input v-model="role" label="Form Access Level" :options="roles"/>
                  <Button @click="openFormModal = true" bgColor="green" textColor="black" class="self-center font-bold mt-5" text="Add field"/>
            </div>
            <Modal @close="openFormModal = false" v-show="openFormModal"/>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import SelectInput from '@/components/shared/BaseSelect/Select.vue';
import TextInput from '@/components/shared/BaseFormElements/SimpleInput/SimpleInput.vue';
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
                  openFormModal: false,
                  title: '',
                  role: 'Select Role'
            }
      }
})
</script>