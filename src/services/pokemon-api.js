import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonName(value = 0) {
  const params = new URLSearchParams({
    limit: 12,
    offset: value,
  });

  const { data } = await axios.get(`/pokemon?${params}`);

  const pokemonsNames = data.results.map(pokemon => pokemon.name);

  const pokemons = await fetchPokemons(pokemonsNames);
  const pokemonsData = pokemons.map(pokemon => pokemon.data);
  return pokemonsData;
}

async function fetchPokemons(pokemonsNames) {
  const result = await Promise.all(
    pokemonsNames.map(pokemon =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    )
  );
  return result;
}

export async function fetchPokemonsByType(type) {
  const { data } = await axios.get(`/type/${type}`);
  const pokemonNames = data.pokemon.map(item => item.pokemon.name);
  const pokemons = await fetchPokemons(pokemonNames);
  const pokemonsData = pokemons.map(pokemon => pokemon.data);
  return pokemonsData;
}
