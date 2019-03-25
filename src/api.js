import axios from "axios";

export const getPokemons = (offset, limit) => {
  try {
    return axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = url => {
  try {
    return axios.get(url);
  } catch (error) {
    console.error(error);
  }
};
