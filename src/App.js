import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PokemonsPage from "./components/pokemon/PokemonsPage";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/About";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/pokemons" component={PokemonsPage} />
          <Route component={PageNotFound} />{" "}
        </Switch>
      </div>
    );
  }
}

export default App;
