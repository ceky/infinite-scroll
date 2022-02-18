export const FETCH_POKEMONS = 'NETWORK/FETCH_POKEMONS';
export const FETCH_POKEMONS_SUCCESS = 'NETWORK/FETCH_POKEMONS_SUCCESS';

export type FetchPokemonsAction = {
  type: typeof FETCH_POKEMONS;
};

export type FetchPokemonsSuccessAction = {
  type: typeof FETCH_POKEMONS_SUCCESS;
  payload: string[];
};

export const fetchPokemons = () => {
  return {
    type: FETCH_POKEMONS,
  };
};

export const fetchPokemonsSuccess = (pokemons: string[]) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons,
  };
};
