import React from "react";

const SearchBar = props => {
  return (
    <form>
      <h3> Find pokemon</h3>
      <input type="text" onChange={props.change} value={props.value} />
    </form>
  );
};
SearchBar.defaultProps = {
  value: ""
};
export default SearchBar;
