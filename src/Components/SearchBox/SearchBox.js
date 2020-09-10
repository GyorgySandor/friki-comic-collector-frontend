import React from "react";

function SearchBox(props) {
  return (
    <div className="searchbox" style={searchBoxStyle}>
      <form onSubmit={props.submit}>
        Search:
        <input type="text" onChange={props.change} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const searchBoxStyle = {
  margin: " 16px auto",
  width: "auto",
  height: "auto",
  backgrondColor: "green",
  border: "3px solid black",
  padding: "8px",
  boxShadow: "0 2px 3px #ccc",
};

export default SearchBox;
