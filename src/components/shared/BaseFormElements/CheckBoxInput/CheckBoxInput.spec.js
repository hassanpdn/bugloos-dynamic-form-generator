import Checkbox from '@/components/shared/BaseFormElements/CheckBoxInput/CheckBoxInput.vue';
import { mount } from '@vue/test-utils';
import { describe } from 'vitest';

describe('CheckBoxInput', () => {
      it('emits update:modelValue event when checkbox is clicked', async () => {
            // Set up initial props and mount component
            const props = {
                  modelValue: false,
                  details: { label: 'My Checkbox' },
            };
            const wrapper = mount(Checkbox, { propsData: props });

            // Find the checkbox and simulate a click event
            const checkbox = wrapper.find('input[type="checkbox"]');
            await checkbox.trigger('input');

            // Wait for event emission to complete
            await wrapper.vm.$nextTick();

            const inputField = wrapper.find('input').element;
            const value = inputField.value
            // Check that the update:modelValue event was emitted with the correct value
            expect(value).toBe(true)
      });
});
