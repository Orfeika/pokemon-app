import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonPage from "./components/PokemonsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <PokemonPage />
      </div>
    );
  }
}

export default App;
