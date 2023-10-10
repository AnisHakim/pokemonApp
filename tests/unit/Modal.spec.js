import { mount } from '@vue/test-utils';
import Modal from '@/components/Molecules/Modal/Modal.vue';

describe('Modal', () => {
  it('renders with correct title and content when visible is true', async () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        title: 'Sample Modal Title'
      },
      slots: {
        default: 'Sample Modal Content'
      }
    });

    expect(wrapper.find('.modal-header h2').text()).toBe('Sample Modal Title');
    expect(wrapper.find('.modal-content').text()).toBe('Sample Modal Content');
    expect(wrapper.find('.modal-overlay').isVisible()).toBe(true);
    await wrapper.find('.modal-header button').trigger('click');
  });

  it('does not render when visible is false', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: false,
        title: 'Sample Modal Title'
      },
      slots: {
        default: 'Sample Modal Content'
      }
    });

    expect(wrapper.find('.modal-overlay').exists()).toBe(false);
  });
});