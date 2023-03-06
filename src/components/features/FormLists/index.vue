<!-- This template renders either a Table or a message stating there are no forms to display -->
<template>
      <Table @handleAction="handleAction" v-if="items?.headers?.length" :items="items"/>
      <section v-else class="no-forms w-full border-dashed border-gray-300 rounded p-10 flex justify-center border-2">
            No Forms.
      </section>
      <modal @close="showFormDetails = false" v-if="showFormDetails">
            <div class="p-4 border rounded-md">
                  <h1 class="text-lg font-medium text-center border-b-2 border-dashed pb-2">{{ item?.title }}</h1>
                  <div class="grid grid-cols-2 mt-2">
                        <div v-for="(field, index) in item?.fields" :key="index" class="flex items-center my-2">
                              <label class="font-medium p-2">{{ field.label }} <span class="text-orange-400 text-bold">:</span></label>
                              <p class="text-gray-700 font-medium ml-2">{{ field.value || '- - -' }}</p>
                        </div>
                  </div>
            </div>
      </modal>
</template>

<script lang="ts">
      import { defineComponent } from 'vue';
      import Table from '@/components/shared/BaseTable/Table.vue';
      import Modal from '@/components/shared/BaseModal/Modal.vue';
      import { FormObject } from '@/typings/interface/index';

      import { mapState } from 'pinia';
      import { userStore } from '@/store/User.store';

      export default defineComponent({
            name: 'form-list', // Name of the component
            components: { Table, Modal }, // Imports the Table component for use in this component
            data(){
                  return {
                        items: {
                              headers: [] as string[], // Array of strings representing the table column headers
                              body : [] as any[] // Array of objects representing the table rows
                        },
                        showFormDetails: false,
                        item : {} as FormObject
                  }
            },
            methods: {
                  // This method sets the table data based on data stored in localStorage
                  setTableInfo(){
                        if (localStorage.getItem('form')) {
                              const form = JSON.parse(localStorage.getItem('form')!); // Parses the localStorage data
                              this.items.headers = ['title', 'role', 'actions']; // Sets the table column headers
                              this.items.body = form.map((item: any) => {
                                    // Maps through the form data to create table rows
                                    let obj: any = {
                                          title: item.title, // Adds the form title to the row
                                          role: item.role, // Adds the form role to the row
                                          id: item.id, // Adds the form id to the row
                                          actions: ['View'] // Add any desired actions here
                                    };
                                    if (item.isEditable) { // If the form is editable, adds 'Edit' to the actions array
                                          obj.actions.push('Edit');
                                    }
                                    if (item.isDeletable) { // If the form is deletable, adds 'Delete' to the actions array
                                          obj.actions.push('Delete');
                                    }
                                    return obj; // Returns the completed row object
                              });
                        } else { // If there is no data in localStorage, sets the table data to empty arrays
                              this.items.headers = [];
                              this.items.body = [];
                        }
                  },
                  // This method handles table row actions (in this case, editing and deleting)
                  handleAction(args: any){
                        const { item, action } = args;
                        if(action === 'Edit' || action === 'New') { // If the action is Edit, emits a 'setCurrentItem' event and stores the form id in localStorage
                              this.emitter.emit('setCurrentItem', 'Create');
                              localStorage.setItem('currentFormId', item.id);
                        } else if(action === 'Delete') { // If the action is Delete, removes the form from localStorage and updates the table data
                              let forms = JSON.parse(localStorage.getItem('form')!);
                              forms = forms.filter((obj : any) => obj.id !== item.id);
                              localStorage.setItem('form', JSON.stringify(forms));
                              !forms.length && localStorage.removeItem('form');
                              this.setTableInfo();
                        } else {
                              this.showFormDetails = true;
                              const form = JSON.parse(localStorage.getItem('form')!);
                              const viewingItem = form.find((i : any) => i.id === item.id);
                              this.item = Object.assign(this.item, viewingItem);
                        }
                  }
            },
            mounted(){ // This hook runs when the component is mounted and sets the form name and table data
                  this.emitter.emit('setFormName', '');
                  this.setTableInfo();
            }
      })
</script>