import React from "react";

function SearchBox(props) {
  return (
    <div className="searchbox" style={searchBoxStyle}>
      <form onSubmit={props.submit}>
        <label>
          Search:
          <input
            type="text"
            value={props.searchParam}
            onChange={props.change}
          />
        </label>
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
