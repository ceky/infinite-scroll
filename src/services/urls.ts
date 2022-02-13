const POKEMONS_URL = ` https://pokeapi.co/api/v2/pokemon?limit={LIMIT}&offset={OFFSET}`;
export const getPokemonsUrl = (limit: number, offset: number) =>
  POKEMONS_URL.replace('{LIMIT}', String(limit)).replace(
    '{OFFSET}',
    String(offset)
  );
