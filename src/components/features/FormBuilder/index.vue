<template>
      <div class="w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            <div class="w-full justify-between grid grid-cols-3 gap-7">
                  <Select description="Select role" label="Form Access" :options="roles"/>
                  <TextInput placeholder="Form Title"/>
                  <Button bgColor="green" textColor="black" class="self-center font-bold" text="Add field"/>
            </div>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Select from '@/components/shared/BaseSelect/Select.vue';
import Button from '@/components/shared/BaseButton/Button.vue';
import TextInput from '@/components/shared/BaseFormElements/SimpleInput/SimpleInput.vue';

export default defineComponent({
      components: { Select, Button, TextInput },
      data(){
            return {
                  roles : ['Admin', 'User']
            }
      }
})
</script>