import React from "react";
import * as api from "../../api";
import Pokemon from "./Pokemon";
import Loading from "../common/Loading";
import "./pokemon.css";

class PokemonPage extends React.Component {
  state = {
    pokemons: {
      count: 964
    },
    isLoaded: false,
    isLoadingNext: false,
    error: null,
    text: "",
    offset: 0,
    limit: 30
  };

  fetchPokemons = (offset, limit) => {
    api
      .getPokemons(offset, limit)
      .then(res => {
        let pokemons = res.data;
        console.log(offset);
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

  fetchNextPokemons = (offset, limit) => {
    api
      .getPokemons(offset, limit)
      .then(res => {
        let pokemonsList = this.state.pokemons.results;
        pokemonsList.push(...res.data.results);
        let pokemons = {
          ...this.state.pokemons,
          results: pokemonsList
        };
        this.setState({
          pokemons,
          error: null,
          isLoadingNext: false
        });
      })
      .catch(error => {
        this.setState({
          isLoadingNext: false,
          error
        });
      });
  };

  componentDidMount() {
    this.fetchPokemons(this.state.offset, this.state.limit);
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    this.setState({
      isLoaded: false
    });
  }

  onScroll = () => {
    let dif = this.state.pokemons.count - this.state.offset;
    const { isLoadingNext, error, limit } = this;
    if (isLoadingNext || error || dif < limit) {
      return;
    }

    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.state.pokemons.results.length < this.state.pokemons.count
    ) {
      let offset =
        this.state.pokemons.count - this.state.offset < 30
          ? this.state.offset
          : this.state.offset + this.state.limit;
      this.setState({
        offset,
        isLoadingNext: true
      });
      this.loadMorePokemons();
    }
  };

  loadMorePokemons = () => {
    this.fetchNextPokemons(this.state.offset, this.state.limit);
  };

  render() {
    return (
      <div className="grid-container">
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
