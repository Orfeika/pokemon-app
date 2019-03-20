import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonsPage from "./components/PokemonsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <PokemonsPage />
      </div>
    );
  }
}

export default App;
