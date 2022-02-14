import axios from 'axios';

import { getPokemonsUrl } from './urls';

export function fetchPokemonsList(offset: number) {
  return axios.get(getPokemonsUrl(offset));
}
