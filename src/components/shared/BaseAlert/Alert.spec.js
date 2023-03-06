import { mount } from '@vue/test-utils'
import Alert from '@/components/shared/BaseAlert/Alert.vue';
import { describe, it, expect } from "vitest";

describe('Alert', () => {
      it('renders message prop', () => {
            const message = 'Hello World';
            const bgColor = 'red';
            const wrapper = mount(Alert, {
                  propsData: { message },
            });

            expect(wrapper.text()).toContain(message);
      });

      it('renders class based on prop', () => {
            const bgColor = 'red';
            const wrapper = mount(Alert, {
                  propsData: { bgColor },
            });
            expect(wrapper.classes('.bg-red-100')).toBeDefined();
      });
});