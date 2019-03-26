import React from "react";
import PropTypes from "prop-types";

const Types = props => {
  return (
    <div>
      <h4>Types:</h4>
      {props.types.map((item, index) => (
        <Type url={item.type.url} name={item.type.name} key={index} />
      ))}
    </div>
  );
};
Types.prototypes = {
  Types: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Type = props => {
  return <div className={props.name + " type"}>{props.name}</div>;
};

export default Types;
