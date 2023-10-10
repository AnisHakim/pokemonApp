import { mount } from '@vue/test-utils';
import Input from './Input.vue';

describe('InputComponent.vue', () => {
  it('emits inputHandler event on enter key press with non-empty input', async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Enter text'
      }
    });

    // Simuler la saisie dans l'input
    await wrapper.setData({ inputValue: 'example' });

    // Émuler l'événement de pression de la touche "Enter"
    await wrapper.find('input').trigger('keyup.enter');

    // Attendre que les événements asynchrones soient résolus
    await wrapper.vm.$nextTick();

    // Vérifier si l'événement inputHandler a été émis
    expect(wrapper.emitted('inputHandler')).toBeTruthy();

    // Vérifier si la valeur émise est correcte
    expect(wrapper.emitted('inputHandler')[0]).toEqual(['example']);
  });

  it('does not emit inputHandler event on enter key press with empty input', async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Enter text'
      }
    });

    // Ne pas saisir de valeur dans l'input

    // Émuler l'événement de pression de la touche "Enter"
    await wrapper.find('input').trigger('keyup.enter');

    // Attendre que les événements asynchrones soient résolus
    await wrapper.vm.$nextTick();

    // Vérifier qu'aucun événement inputHandler n'a été émis
    expect(wrapper.emitted('inputHandler')).toBeFalsy();
  });
});