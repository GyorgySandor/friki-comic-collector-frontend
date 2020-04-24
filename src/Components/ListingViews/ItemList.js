import React from "react";

function ItemList(props) {
  return (
    <div class="item-list" style={itemListStyle}>
      <p style={listHeaderStyle}>Search Results:</p>
    </div>
  );
}

const itemListStyle = {
  margin: " 16px auto",
  width: "auto",
  height: "auto",
  backgroundColor: "white",
  border: "3px solid black",
  padding: "8px",
  boxShadow: "0 2px 3px #ccc",
};

const listHeaderStyle = {
  color: "white",
  backgroundColor: "black",
};

export default ItemList;
