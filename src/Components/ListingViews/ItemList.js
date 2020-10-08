import React from "react";
import Item from "./Item/Item";

function ItemList(props) {
  return (
    <div className="item-list" style={itemListStyle}>
      <p style={listHeaderStyle}>Search Results:</p>
      <div>
        {props.items.map((item) => {
          console.log(item);
          return <Item key={item.id} name={item.name} />;
        })}
      </div>
      <div>
        <button style={right} onClick={props.next}>
          next
        </button>
        <button style={left} onClick={props.previous}>
          previous
        </button>
      </div>
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
  overflow: "auto",
};

const listHeaderStyle = {
  color: "white",
  backgroundColor: "black",
};

const right = {
  float: "right",
};

const left = {
  float: "left",
};
export default ItemList;
