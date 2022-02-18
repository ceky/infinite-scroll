import axios from 'axios';
import { Dispatch } from 'react';
import {
  fetchPokemons,
  fetchPokemonsSuccess,
} from '../state/action-creators/fetchPokemons';

import { getPokemonsUrl } from './urls';

export const fetchPokemonsList =
  (offset: number) => async (dispatch: Dispatch<any>) => {
    dispatch(fetchPokemons());

    const response = await axios.get(getPokemonsUrl(offset));

    dispatch(fetchPokemonsSuccess(response.data.results));
  };
