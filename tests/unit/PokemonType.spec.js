import { mount } from '@vue/test-utils';
import PokemonType from '@/components/Atoms/PokemonType/PokemonType.vue';

describe('PokemonType.vue', () => {
  it('renders correctly with pokemonType prop', async () => {
    const pokemonType = 'fire'; // Replace this with the desired type for testing
    const wrapper = mount(PokemonType, {
      props: {
        pokemonType,
      },
    });
    expect(wrapper.classes()).toContain('commun');
    expect(wrapper.classes()).toContain(pokemonType);
    expect(wrapper.text()).toBe(pokemonType);
    wrapper.unmount();
  });
});