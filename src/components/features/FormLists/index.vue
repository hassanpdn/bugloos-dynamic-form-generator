<template>
      <Table @handleAction="handleAction" v-if="computedForms?.headers?.length" :items="computedForms"/>
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
                              headers: [] as string[],
                              body : [{}] as any[]
                        }
                  }
            },
            computed: {
                  computedForms(): any {
                        if (localStorage.getItem('form')) {
                              const form = JSON.parse(localStorage.getItem('form')!);
                              const headers = ['title', 'role', 'actions'];
                              const body = form.map((item: any) => {
                                    let obj: any = {
                                          title: item.title,
                                          role: item.role,
                                          id: item.id,
                                          actions: [] // Add any desired actions here
                                    };
                                    if (item.isEditable) {
                                          obj.actions.push('Edit');
                                    }
                                    if (item.isDeletable) {
                                          obj.actions.push('Delete');
                                    }
                                    return obj;
                              });
                              return {
                                    headers: headers,
                                    body: body
                              };
                        } else {
                              return this.items;
                        }
                  }
            },
            methods: {
                  handleAction(args: any){
                        const { item, action } = args;
                        if(action === 'Edit') {
                              this.emitter.emit('setCurrentItem', 'Create');
                              localStorage.setItem('currentFormId', item.id)
                        } else {
                              console.log(action)
                        }
                  }
            },
            mounted(){
                  this.emitter.emit('setFormName', '')
            }
      })
</script>