import { mount } from '@vue/test-utils';
import Input from '@/components/Atoms/Input/Input.vue';

describe('InputComponent.vue', () => {
  it('emits inputHandler event on enter key press with non-empty input', async () => {
    const wrapper = mount(Input);
    const input = wrapper.find('input');
    await input.setValue('example');
    await input.trigger('input');

    // Trigger the enter key press event
    await input.trigger('keyup.enter');

    // Ensure that the inputHandler event is emitted
    expect(wrapper.emitted('inputHandler')).toBeTruthy();
    expect(wrapper.emitted('inputHandler')[0][0]).toBe('example');
  });

  it('does not emit inputHandler event on enter key press with empty input', async () => {
    const wrapper = mount(Input);
    
    // Find the input element and trigger the enter key press event
    await wrapper.find('input').trigger('keyup.enter');

    // Ensure that the inputHandler event is not emitted
    expect(wrapper.emitted('inputHandler')).toBeFalsy();
  });
});