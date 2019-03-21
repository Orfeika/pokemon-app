import React from "react";
import * as api from "../../api";
import Pokemon from "./Pokemon";
import { pokemonList } from "../defaultData";
import SearchBar from "../common/SearchBar";

class PokemonPage extends React.Component {
  state = {
    pokemons: pokemonList,
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

  handleChange = event => {
    const text = event.target.value;
    this.setState({ text });
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (event.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.pokemons.results;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = event.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.pokemons.results;
    }
    // Set the filtered state based on what our rules added to newList
    const pokemons = { ...this.state.course, results: newList };
    this.setState({ pokemons });
  };

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.text}
          change={this.handleChange}
          submit={this.handleSubmit}
        />
        {this.state.pokemons.results.map(pokemon => (
          <Pokemon url={pokemon.url} name={pokemon.name} key={pokemon.name} />
        ))}
      </div>
    );
  }
}

export default PokemonPage;
