import { mount } from '@vue/test-utils'
import RadioInput from '@/components/shared/BaseFormElements/RadioInput/RadioInput.vue';

describe('RadioInput', () => {
      it('renders the radio input options correctly', () => {
            const details = {
                  label: 'Favorite Color',
                  radioOptions: ['Red', 'Blue', 'Green']
            }
            const wrapper = mount(RadioInput, {
                  props: {
                        details
                  }
            })
            // check if the label is rendered correctly
            expect(wrapper.find('label[for="Favorite Color"]').text()).toBe('Favorite Color')
            // check if all radio options are rendered
            const radioOptions = wrapper.findAll('input[type="radio"]')
            expect(radioOptions).toHaveLength(3)
            expect(radioOptions[0].attributes('value')).toBe('Red')
            expect(radioOptions[1].attributes('value')).toBe('Blue')
            expect(radioOptions[2].attributes('value')).toBe('Green')
      })
})