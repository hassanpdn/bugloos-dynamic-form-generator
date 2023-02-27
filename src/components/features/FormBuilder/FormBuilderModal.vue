<template>
      <modal>
            <Select description="Select Form Element" label="Select Form Element" :options="options" />
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
                        options: ['Checkbox', 'Text', 'Number', 'Date', 'Date Range', 'Radio', 'Textarea', 'Select']
                  }
            }
      })
</script>

<style lang='scss'>
</style>