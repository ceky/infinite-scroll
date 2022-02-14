import { PokemonType } from './PokemonType';

export type Pokemons = {
  isLoading: boolean;
  offset: number;
  pokemonList: PokemonType[];
};
