import { mount } from '@vue/test-utils'
import ModalComponent from '@/components/shared/BaseModal/Modal.vue';
import { describe, it, expect } from "vitest";

describe('ModalComponent', () => {
      it('renders the modal content when opened', async () => {
            const wrapper = mount(ModalComponent, {
                  slots: {
                        default: 'Modal content'
                  }
            })
            expect(wrapper.text()).toContain('Modal content')
      })
})