import NumberInput from '@/components/shared/BaseFormElements/NumberInput/NumberInput.vue';
import { shallowMount } from '@vue/test-utils';
// import { describe } from 'vitest';

// import NumberInput from '@/components/shared/BaseFormElements/NumberInput/NumberInput.vue';
// import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

describe('NumberInput', () => {
      it('should render label and placeholder', () => {
            const label = 'My Label';
            const placeholder = 'My Placeholder';
            const wrapper = shallowMount(NumberInput, {
                  props: {
                        details: {
                              label,
                              placeholder,
                        },
                  },
            });

            expect(wrapper.find('label').text()).toBe(label);
            expect(wrapper.find('input').attributes('placeholder')).toBe(placeholder);
      });

      it('should emit update:modelValue event when input value changes', async () => {
            const wrapper = shallowMount(NumberInput);
            const input = wrapper.find('input');
            const value = '123';

            await input.setValue(value);

            expect(wrapper.emitted('update:modelValue')).toBeTruthy();
            expect(wrapper.emitted('update:modelValue')[0][0]).toBe(value);
      });

      it('should format value as currency if format is USD or EUR', () => {
            const wrapper = shallowMount(NumberInput, {
                  props: {
                        modelValue: 12345.67,
                        details: {
                              format: 'USD',
                        },
                  },
            });

            expect(wrapper.find('span').text()).toBe('$12,345.67');
      });

      it('should show error message when validation fails', async () => {
            const wrapper = shallowMount(NumberInput, {
                  props: {
                        modelValue: '',
                        details: {
                              label: 'My Label',
                              placeholder: 'My Placeholder',
                              validations: ['positive'],
                        },
                  },
            });

            await wrapper.find('input').setValue('-123');

            expect(wrapper.findAll('p').length).toBe(0);
      });

      it('should not show currency if format is not USD or EUR', () => {
            const wrapper = shallowMount(NumberInput, {
                  props: {
                        modelValue: '12345.67',
                        details: {
                              format: 'CAD',
                        },
                  },
            });

            expect(wrapper.find('span').exists()).toBeTruthy();
      });

      it('should not show currency if modelValue is falsy', () => {
            const wrapper = shallowMount(NumberInput, {
                  props: {
                        modelValue: '',
                        details: {
                              format: 'USD',
                        },
                  },
            });

            expect(wrapper.find('span').exists()).toBeTruthy();
      });

      it('should not show currency if there are validation errors', () => {
            const wrapper = shallowMount(NumberInput, {
                  props: {
                        modelValue: '-123',
                        details: {
                              format: 'USD',
                              validations: ['positive'],
                        },
                        errors: ['positive'],
                  },
            });

            expect(wrapper.find('span').exists()).toBeTruthy();
      });
});
