<template>
      <div class="w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            <div class="w-full justify-between grid grid-cols-3 gap-7">
                  <Select description="Select role" label="Form Access" :options="roles"/>
                  <TextInput v-model="formTitle" placeholder="Form Title"/>
                  <Button @click="openFormModal = true" bgColor="green" textColor="black" class="self-center font-bold" text="Add field"/>
            </div>
            <Modal @close="openFormModal = false" v-show="openFormModal"/>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Select from '@/components/shared/BaseSelect/Select.vue';
import Button from '@/components/shared/BaseButton/Button.vue';
import TextInput from '@/components/shared/BaseFormElements/SimpleInput/SimpleInput.vue';
import Modal from './FormBuilderModal.vue';

export default defineComponent({
      components: { Select, Button, TextInput, Modal },
      data(){
            return {
                  roles : ['Admin', 'User'],
                  formTitle: '',
                  openFormModal: false
            }
      }
})
</script>