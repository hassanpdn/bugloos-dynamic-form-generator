import { mount } from '@vue/test-utils'
import SelectField from '@/components/shared/BaseSelect/Select.vue';
import { describe, it, expect } from "vitest";

describe('SelectField.vue', () => {
      const label = 'Favorite fruit';
      const placeholder = 'Select an option';
      const options = [
            { name: 'Apple', value: 'apple' },
            { name: 'Banana', value: 'banana' },
            { name: 'Orange', value: 'orange' }
      ];

      it('renders label and options correctly', () => {
            const wrapper = mount(SelectField, {
                  propsData: {
                        details: {
                              label,
                              placeholder,
                              options
                        },
                        modelValue: ''
                  }
            });

            expect(wrapper.find('label').text()).toBe(label);
            expect(wrapper.findAll('option')).toHaveLength(options.length + 1);
            options.forEach((option, index) => {
                  expect(wrapper.findAll('option').at(index + 1).text()).toBe(option.name);
                  expect(wrapper.findAll('option').at(index + 1).attributes('value')).toBe(option.value);
            });
      });
});