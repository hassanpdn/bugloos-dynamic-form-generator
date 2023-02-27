<template>
      <div class="font-bold">
            <ul class="flex flex-col items-center py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li @click="setCurrentItem(item.title)" class="mb-3" :class="{'bg-gray-600 text-white rounded': item.title === currentItem}" v-for="(item , index) in menuItems" :key="`item-${index}`">
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:rounded dark:hover:bg-gray-600">{{ item.title }}</a>
                  </li>
            </ul>
      </div>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import { MenuItems } from '@/typings/interface/index';

      export default defineComponent({
            name: 'sidebar-menu',
            data(){
                  return {
                        isOpen: true as Boolean,
                        menuItems: [
                              { title: 'Forms', isActive: false },
                              { title: 'Create Form', isActive: false }
                        ] as MenuItems[],
                        currentItem: 'Forms'
                  }
            },
            methods: {
                  setCurrentItem(item: string) : void{
                        this.currentItem = item
                        this.emitter.emit('setActiveMenu', item)
                  }
            }
      })
</script>

<style>
</style>