import axios from "axios";

export const getPokemons = () => {
  try {
    return axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200");
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
