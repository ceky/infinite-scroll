const POKEMONS_URL = ` https://pokeapi.co/api/v2/pokemon?limit=10&offset={OFFSET}`;
export const getPokemonsUrl = (offset: number) =>
  POKEMONS_URL.replace('{OFFSET}', String(offset));
