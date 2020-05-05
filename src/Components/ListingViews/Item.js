import React from "react";

function Item(props) {
  return (
    <div className="list-item">
      <div style={itemStyle}>{props.name}</div>
    </div>
  );
}

const itemStyle = {
  backgrondColor: "green",
  border: "1px",
  padding: "1px",
  backgroundColor: "#90EE90",
  margin: " 6px auto",
};

export default Item;
