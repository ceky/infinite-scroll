import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import InfiniteLoader from './components/InfiniteLoader/InfiniteLoader';
import Pokemons from './components/Pokemons/Pokemons';
import { fetchPokemonsList } from './services/fetchPokemonsService';

import { ApplicationState } from './types/ApplicationState';
import { PokemonType } from './types/PokemonType';

function App() {
  const pokemons = useSelector((state: ApplicationState) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPokemonsList(pokemons.offset, dispatch);
  }, []);

  const fetchNewEntries = useCallback(() => {
    if (!pokemons.isLoading) {
      fetchPokemonsList(pokemons.offset, dispatch);
    }
  }, [pokemons]);

  function renderPokemons(item: PokemonType, index: number) {
    return <Pokemons key={index} name={item.name} />;
  }

  return (
    <main>
      <Header />

      <InfiniteLoader
        onReachBottom={fetchNewEntries}
        isLoading={pokemons.isLoading}
      >
        <ul>
          {pokemons?.pokemonList?.length > 0 &&
            pokemons.pokemonList.map((item: PokemonType, index: number) =>
              renderPokemons(item, index)
            )}
        </ul>
      </InfiniteLoader>
    </main>
  );
}

export default App;
