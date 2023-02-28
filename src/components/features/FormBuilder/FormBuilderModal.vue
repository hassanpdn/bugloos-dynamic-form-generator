<template>
      <modal>
            <p class="text-lg font-bold mb-3 text-center">Add new field to form</p>
            <select-input v-model="selectedComponent" label="Field Type" :options="componentNames"/>
            {{ selectedComponent }}
      </modal>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import Modal from "@/components/shared/BaseModal/Modal.vue";
      import SelectInput from '@/components/shared/BaseSelect/Select.vue';

      export default defineComponent({
            name: 'form-builder-modal',
            components: { Modal, SelectInput },
            data(){
                  return {
                        componentNames: [
                              { name: 'Checkbox', value: 'CheckBoxInput' },
                              { name: 'Date', value: 'DateInput' },
                              { name: 'Number', value: 'NumberInput' },
                              { name: 'Radio', value: 'RadioInput' },
                              { name: 'Textarea', value: 'Textarea' },     
                        ],
                        selectedComponent: 'Select Form Element'
                  }
            },
            methods: {
                  setCurrentComponent(e: Event){
                        console.log((e.target as HTMLSelectElement).value)
                  }
            }
      })
</script>

<style>
</style>;