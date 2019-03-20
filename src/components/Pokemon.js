import React from "react";
import * as api from "../api";
import PropTypes from "prop-types";
class Pokemon extends React.Component {
  state = {
    pokemon: {
      sprites: {
        back_default: null,
        font_default: null
      }
    },
    isLoaded: false,
    error: null
  };

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
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img
          src={this.state.pokemon.sprites.front_default}
          alt={this.props.name}
          height="150"
        />
        <img
          src={this.state.pokemon.sprites.back_default}
          alt={this.props.name}
          height="150"
        />
      </div>
    );
  }
}

Pokemon.prototypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Pokemon;
