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
};

export default Item;
