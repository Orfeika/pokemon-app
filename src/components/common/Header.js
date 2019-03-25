import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar my-2">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/pokemons">
          Pokemons
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
