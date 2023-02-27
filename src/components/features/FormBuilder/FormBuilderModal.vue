<template>
      <modal>
            <h1 class="text-lg font-bold mb-3">Add new field to form</h1>
            <Select v-model="selectedComponent" description="Select Form Element" label="Select Form Element" :options="options" />
            {{ selectedComponent }}
      </modal>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import Modal from "@/components/shared/BaseModal/Modal.vue";
      import Select from '@/components/shared/BaseSelect/Select.vue';

      export default defineComponent({
            name: 'form-builder-modal',
            components: { Modal, Select },
            data(){
                  return {
                        options: ['Checkbox', 'Text', 'Number', 'Date', 'Date Range', 'Radio', 'Textarea', 'Select'],
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