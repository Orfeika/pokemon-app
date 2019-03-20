import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./components/Pokemon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Pokemon name="ivysaur" url="https://pokeapi.co/api/v2/pokemon/2/" />
      </div>
    );
  }
}

export default App;
