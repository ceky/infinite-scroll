import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import InfiniteLoader from './components/InfiniteLoader/InfiniteLoader';
import Pokemon from './components/Pokemon/Pokemon';
import { fetchPokemonsList } from './services/fetchPokemonsService';
import { ApplicationState } from './types/ApplicationState';
import { PokemonType } from './types/PokemonType';

function App() {
  const pokemons = useSelector((state: ApplicationState) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsList(pokemons.offset));
  }, []);

  const fetchNewEntries = useCallback(() => {
    if (!pokemons.isLoading) {
      dispatch(fetchPokemonsList(pokemons.offset));
    }
  }, [pokemons]);

  return (
    <>
      <Header />

      <InfiniteLoader
        onReachBottom={fetchNewEntries}
        isLoading={pokemons.isLoading}
      >
        <ul>
          {pokemons?.pokemonList?.length > 0 &&
            pokemons.pokemonList.map((item: PokemonType) => (
              <Pokemon name={item.name} key={item.name} />
            ))}
        </ul>
      </InfiniteLoader>
    </>
  );
}

export default App;
