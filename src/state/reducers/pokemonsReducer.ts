import { Pokemons } from '../../types/Pokemons';
import {
  FetchPokemonsAction,
  FetchPokemonsSuccessAction,
  FETCH_POKEMONS,
  FETCH_POKEMONS_SUCCESS,
} from '../action-creators/pokemons-middleware';

const initialState: Pokemons = {
  isLoading: false,
  pokemonList: [],
  offset: 0,
};

const NO_OF_NEW_ITEMS = 10;

type ActionTypes = FetchPokemonsAction | FetchPokemonsSuccessAction;

const reducer = (state: Pokemons = initialState, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        isLoading: true,
        offset: state.offset + NO_OF_NEW_ITEMS,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonList: [...state.pokemonList, ...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
