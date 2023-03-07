<template>
      <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                              <th v-for="(header, i) in items.headers" :key="`header-${i}`" scope="col" class="text-center px-6 py-3">
                                    {{ header || '- - -' }}
                              </th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr v-for="(item, j) in items.body" :key="`item-${j}`" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <th scope="row" class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ item.title || '- - -' }}
                              </th>
                              <td class="text-center px-6 py-4">
                                    {{ item.role || '- - -' }}
                              </td>
                              <td class="flex justify-center text-center px-6 py-4">
                                    <a v-if="item.actions.length" @click="handleAction({item, action})" v-for="(action, k) in item.actions" :key="`action-${k}`" href="#" class="font-medium mr-5 text-blue-600 dark:text-blue-500 hover:underline">{{ action || '- - -' }}</a>
                                    <span class="mr-5" v-else>- - -</span>
                              </td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script lang="ts">
      import { defineComponent, PropType } from 'vue';
      import { TableItemTypes } from '@/typings/interface/index';

      export default defineComponent({
            name: 'table-component',
            props: {
                  items: {
                        type: Object as PropType<TableItemTypes>,
                        default: {}
                  }
            },
            methods: {
                  handleAction(form: any){
                        this.$emit('handleAction', form);
                  }
            }

      })
</script>

<style>
</style>