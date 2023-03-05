import { mount } from '@vue/test-utils'
import Button from '@/components/shared/BaseButton/Button.vue';
import { describe, it, expect } from "vitest";

describe('Button', () => {
      const wrapper = mount(Button)
      it('renders a vue instance', () => {
            expect(wrapper.html()).toMatchSnapshot()
      })

      it('renders a button', () => {
            expect(wrapper.find('button').exists()).toBe(true)
      })

      it('should call click handler', async () => {
            await wrapper.find('button').trigger('click')
            expect(wrapper.emitted().click).toBeTruthy()
      })

      it('checks the prop to be passed', () => {
            const wrapper = mount(Button, {
                  propsData: {
                        expanded: true,
                        bgColor: 'red'
                  }
            })
            expect(wrapper.classes()).toContain('w-full');
            expect(wrapper.classes()).toContain('bg-red-300');
      })

})