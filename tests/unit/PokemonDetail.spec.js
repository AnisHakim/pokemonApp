import { mount } from '@vue/test-utils'
import PokemonDetailTemplate from '@/components/templates/PokemonDetailTemplate.vue'
import PokemonType from '@/components/Atoms/PokemonType/PokemonType.vue';

describe('PokemonDetailTemplate', () => {
  it('renders with pokemon details', () => {
    const pokemonDetails = {
      name: 'Pikachu',
      id: 25,
      types: ['Electric'],
      height: 0.4,
      weight: 6,
      stats: [
        { name: 'HP', value: 255 }
      ]
    }

    const wrapper = mount(PokemonDetailTemplate, {
      props: {
        pokemonGetDetails: pokemonDetails,
        isLoading: false
      },
      global: {
        components: {
          PokemonType
        }
      }
    })

    expect(wrapper.text()).toContain('PIKACHU');
    expect(wrapper.text()).toContain('Number : 25');

    expect(wrapper.text()).toContain('Height : 0.4 m');
    expect(wrapper.text()).toContain('Weight : 6 Kg');
   
    expect(wrapper.text()).toContain('Statisticals :');
    expect(wrapper.text()).toContain('100%');

    expect(wrapper.findComponent({ name: 'Loader' }).exists()).toBe(false);
  })
})