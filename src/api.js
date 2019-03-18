import axios from "axios";

export const getPokemons = () => {
  try {
    return axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50");
  } catch (error) {
    console.error(error);
  }
};
