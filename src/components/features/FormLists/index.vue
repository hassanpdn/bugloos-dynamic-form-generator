<template>
      <Table v-if="items.headers.length" :items="items"/>
      <div v-else class="w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            No Forms.
      </div>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import Table from '@/components/shared/BaseTable/Table.vue';

      export default defineComponent({
            name: 'form-list',
            components: { Table },
            data(){
                  return {
                        items: {
                              // headers: ['name', 'family' , 'actions'],
                              // body : [{name: 'hassan', family: 'pudineh', actions: ['Edit', 'Delete']}],
                              headers: [],
                              body : [{}]
                        }
                  }
            }
      })
</script>