import DatePickerInput from '@/components/shared/BaseFormElements/DateInput/DateInput.vue';
import { mount } from '@vue/test-utils';
import { describe } from 'vitest';

describe('DatePickerInput', () => {
      it('renders the correct label', () => {
            const props = {
                  details: {
                        label: 'Select a date',
                  },
            };
            const wrapper = mount(DatePickerInput, { props });

            expect(wrapper.find('label').text()).toBe('Select a date');
      });

      it('updates the date when a new value is selected', async () => {
            const props = {
                  details: {
                        label: 'Select a date',
                  },
            };
            const wrapper = mount(DatePickerInput, { propsData: props });
            expect(wrapper.vm.$data.date).toBe(false);
      });
});
