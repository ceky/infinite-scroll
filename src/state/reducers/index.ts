import { combineReducers } from 'redux';

import pokemonReducer from './pokemonsReducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

export default rootReducer;
