import React from "react";
import * as api from "../../api";
import PropTypes from "prop-types";
import Abilities from "../abilities/Abilities";
import Types from "../type/Types";

class Pokemon extends React.Component {
  state = {
    pokemon: {
      sprites: {
        back_default: null,
        font_default: null
      },
      types: [
        {
          type: {
            name: null,
            url: null
          }
        }
      ],
      abilities: [
        {
          ability: {
            name: null,
            url: null
          }
        }
      ]
    },
    isLoaded: false,
    error: null
  };

  fetchPokemon = () => {
    api
      .getPokemon(this.props.url)
      .then(res => {
        const pokemon = res.data;
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
      <div className="container">
        <div className="img-container">
          <a title={this.props.name}>
            <img
              src={this.state.pokemon.sprites.front_default}
              alt={this.props.name}
            />
          </a>
        </div>
        <Types className="types" types={this.state.pokemon.types} />
        <div className="abilities">
          <Abilities abilities={this.state.pokemon.abilities} />
        </div>
      </div>
    );
  }
}

Pokemon.prototypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Pokemon;
