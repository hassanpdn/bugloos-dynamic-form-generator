<template>
      <Table @handleAction="handleAction" v-if="items?.headers?.length" :items="items"/>
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
                              headers: [] as string[],
                              body : [] as any[]
                        }
                  }
            },
            methods: {
                  setTableInfo(){
                        if (localStorage.getItem('form')) {
                              const form = JSON.parse(localStorage.getItem('form')!);
                              this.items.headers = ['title', 'role', 'actions'];
                              this.items.body = form.map((item: any) => {
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
                        } else {
                              this.items.headers = [];
                              this.items.body = [];
                        }
                  },
                  handleAction(args: any){
                        const { item, action } = args;
                        if(action === 'Edit') {
                              this.emitter.emit('setCurrentItem', 'Create');
                              localStorage.setItem('currentFormId', item.id);
                        } else {
                              let forms = JSON.parse(localStorage.getItem('form')!);
                              forms = forms.filter((obj : any) => obj.id !== item.id);
                              localStorage.setItem('form', JSON.stringify(forms));
                              !forms.length && localStorage.removeItem('form');
                              this.setTableInfo();
                        }
                  }
            },
            mounted(){
                  this.emitter.emit('setFormName', '');
                  this.setTableInfo();
            }
      })
</script>