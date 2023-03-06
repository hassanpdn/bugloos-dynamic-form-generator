import { mount } from '@vue/test-utils';
import TextAreaInput from '@/components/shared/BaseFormElements/TextArea/TextArea.vue';

describe('TextAreaInput', () => {
      it('renders the textarea input with the correct props', () => {
            const details = {
                  label: 'Description',
                  placeholder: 'Enter your description',
                  maxLength: 100
            }
            const wrapper = mount(TextAreaInput, {
                  props: {
                        details,
                        modelValue: ''
                  }
            })
            // check if the label and placeholder are rendered correctly
            expect(wrapper.find('label[for="Enter your description"]').text()).toBe('Description')
            expect(wrapper.find('textarea').attributes('placeholder')).toBe('Enter your description')
            // check if the maxlength is set correctly
            expect(wrapper.find('textarea').attributes('maxlength')).toBe('100')
      })
})
