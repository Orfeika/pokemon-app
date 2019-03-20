import React from "react";
import * as api from "../api";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        sprites: {
          back_default: null,
          font_default: null
        }
      },
      isLoaded: false,
      error: null
    };
  }

  fetchPokemon = () => {
    api
      .getPokemon(this.props.url)
      .then(res => {
        const pokemon = res.data;
        console.log(pokemon);
        this.setState({
          pokemon,
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
    this.fetchPokemon();
  }

  render() {
    const sprites = this.state.pokemon.sprites;
    console.log(sprites.back_default);

    return (
      <div>
        <h2>{this.props.name}</h2>

        <img
          src={this.state.pokemon.sprites.front_default}
          alt={this.props.name}
          height="100"
        />
        <img
          src={this.state.pokemon.sprites.back_default}
          alt={this.props.name}
          height="100"
        />
      </div>
    );
  }
}

export default Pokemon;
