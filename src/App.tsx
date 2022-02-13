import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InfiniteLoader from './components/InfiniteLoader/InfiniteLoader';
import Pokemons from './components/Pokemons/Pokemons';
import useFetchContent from './services/useFetchContent';
import { PokemonType } from './types/PokemonType';

const NO_OF_NEW_ITEMS = 10;

function App() {
  const [limit, setLimit] = useState(NO_OF_NEW_ITEMS);
  const [offset, setOffset] = useState(0);

  const { content, isLoading } = useFetchContent(limit, offset);

  const fetchNewEntries = useCallback(() => {
    if (!isLoading) {
      setLimit(limit + NO_OF_NEW_ITEMS);
      setOffset(offset + NO_OF_NEW_ITEMS);
    }
  }, [limit, offset]);

  function renderPokemons(item: PokemonType, index: number) {
    return <Pokemons key={index} name={item.name} />;
  }

  return (
    <main>
      <Header />

      <InfiniteLoader onReachBottom={fetchNewEntries}>
        <ul>
          {content?.length > 0 &&
            content.map((item: any, index: number) =>
              renderPokemons(item, index)
            )}
        </ul>
      </InfiniteLoader>
    </main>
  );
}

export default App;
