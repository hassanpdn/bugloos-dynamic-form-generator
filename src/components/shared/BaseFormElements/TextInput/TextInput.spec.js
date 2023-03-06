import TextInput from '@/components/shared/BaseFormElements/TextInput/TextInput.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from "vitest";

describe('Input', () => {
      it('renders correctly', () => {
            const wrapper = mount(TextInput, {
                  props: {
                        details: {
                              label: 'Name',
                              placeholder: 'Enter your name',
                              type: 'text',
                              disabled: false,
                        },
                        modelValue: '',
                  },
            });

            // check if label is rendered
            expect(wrapper.find('label').text()).toBe('Name');

            // check if input is rendered
            expect(wrapper.find('input').exists()).toBe(true);

            // check if input has correct placeholder value
            expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your name');
      });

      it('emits update:modelValue event when input is changed', async () => {
            const wrapper = mount(TextInput, {
                  props: {
                        details: {
                              label: 'Name',
                              placeholder: 'Enter your name',
                              type: 'text',
                              disabled: false,
                        },
                        modelValue: '',
                  },
            });

            // simulate input change
            await wrapper.find('input').setValue('John Doe');

            // check if update:modelValue event is emitted
            expect(wrapper.emitted('update:modelValue')).toBeTruthy();

            // check if emitted value is correct
            expect(wrapper.emitted('update:modelValue')[0]).toEqual(['John Doe']);
      });

      it('disables input when details.disabled prop is true', () => {
            const wrapper = mount(TextInput, {
                  props: {
                        details: {
                              label: 'Name',
                              placeholder: 'Enter your name',
                              type: 'text',
                              disabled: true
                        },
                        modelValue: '',
                  },
            });

            // check if input has rendered the placeholder
            expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your name');
            // check if input has correct class
            expect(wrapper.find('input').classes()).toContain('bg-slate-50');
      });
});
