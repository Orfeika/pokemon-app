import React from "react";
import * as api from "../../api";
import Pokemon from "./Pokemon";
import Loading from "../common/Loading";

class PokemonPage extends React.Component {
  state = {
    pokemons: {},
    isLoaded: false,
    error: null,
    text: ""
  };

  fetchData = () => {
    api
      .getPokemons()
      .then(res => {
        const pokemons = res.data;
        this.setState({
          pokemons,
          isLoaded: true,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          this.state.pokemons.results.map(pokemon => (
            <Pokemon url={pokemon.url} name={pokemon.name} key={pokemon.name} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default PokemonPage;
