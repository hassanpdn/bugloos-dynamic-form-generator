import { mount } from '@vue/test-utils';
import TableComponent from '@/components/shared/BaseTable/Table.vue';

describe('TableComponent', () => {
      it('renders headers correctly', () => {
            const items = {
                  headers: ['ID', 'Name', 'Action'],
                  body: [],
            };
            const wrapper = mount(TableComponent, {
                  props: { items },
            });
            const ths = wrapper.findAll('th');
            expect(ths.length).toBe(3);
            expect(ths[0].text()).toBe('ID');
            expect(ths[1].text()).toBe('Name');
            expect(ths[2].text()).toBe('Action');
      });

      it('renders body correctly', () => {
            const items = {
                  headers: ['ID', 'Name', 'Action'],
                  body: [
                        {
                              title: 'User 1',
                              role: 'Admin',
                              actions: ['Edit', 'Delete'],
                        },
                        {
                              title: 'User 2',
                              role: 'User',
                              actions: ['Edit'],
                        },
                  ],
            };
            const wrapper = mount(TableComponent, {
                  props: { items },
            });
            const trs = wrapper.findAll('tr');
            expect(trs.length).toBe(3); // Including the header row
            expect(trs[1].text()).toContain('User 1');
            expect(trs[1].text()).toContain('Admin');
            const actions = trs[1].findAll('a');
            expect(actions.length).toBe(2);
            expect(actions[0].text()).toBe('Edit');
            expect(actions[1].text()).toBe('Delete');
            expect(trs[2].text()).toContain('User 2');
            expect(trs[2].text()).toContain('User');
            const actions2 = trs[2].findAll('a');
            expect(actions2.length).toBe(1);
            expect(actions2[0].text()).toBe('Edit');
      });

      it('emits handleAction event when action link is clicked', () => {
            const items = {
                  headers: ['ID', 'Name', 'Action'],
                  body: [
                        {
                              title: 'User 1',
                              role: 'Admin',
                              actions: ['Edit', 'Delete'],
                        },
                  ],
            };
            const wrapper = mount(TableComponent, {
                  props: { items },
            });
            const actionLink = wrapper.find('a');
            actionLink.trigger('click');
            expect(wrapper.emitted('handleAction')).toBeTruthy();
            expect(wrapper.emitted('handleAction').length).toBe(1);
            expect(wrapper.emitted('handleAction')[0]).toEqual([
                  { item: items.body[0], action: items.body[0].actions[0] },
            ]);
      });
});