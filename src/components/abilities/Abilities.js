import React from "react";
import PropTypes from "prop-types";

const Abilities = props => {
  return (
    <div>
      <h3>Abilities:</h3>
      {props.abilities.map((item, index) => (
        <Ability url={item.ability.url} name={item.ability.name} key={index} />
      ))}
    </div>
  );
};
Abilities.prototypes = {
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Ability = props => {
  return <div className="ability">{props.name}</div>;
};

export default Abilities;
