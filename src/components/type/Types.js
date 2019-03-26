import React from "react";
import PropTypes from "prop-types";

const Types = props => {
  return (
    <div>
      <h3>Types:</h3>
      {props.types.map((type, index) => (
        <Type url={type.type.url} name={type.type.name} key={index} />
      ))}
    </div>
  );
};
Types.prototypes = {
  Types: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Type = props => {
  return <div className="type">{props.name}</div>;
};

export default Types;
