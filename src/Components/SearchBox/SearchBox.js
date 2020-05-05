import React from "react";

function SearchBox() {
  return (
    <div className="searchbox" style={searchBoxStyle}>
      <p>Looking for something?</p>
      <input type="text" />
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
