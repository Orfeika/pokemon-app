import React from "react";
import * as api from "../api";

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      isLoaded: false,
      error: null
    };
  }

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
    console.log(this.state.pokemons);
    return <div />;
  }
}

export default PokemonPage;
