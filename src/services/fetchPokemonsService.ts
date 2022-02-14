import axios from 'axios';
import { Dispatch } from 'react';
import {
  fetchPokemons,
  fetchPokemonsSuccess,
} from '../state/action-creators/pokemons-middleware';

import { getPokemonsUrl } from './urls';

export function fetchPokemonsList(offset: number, dispatch: Dispatch<any>) {
  dispatch(fetchPokemons());

  return axios.get(getPokemonsUrl(offset)).then((response) => {
    const pokemons = response.data.results;
    dispatch(fetchPokemonsSuccess(pokemons));
  });
}
