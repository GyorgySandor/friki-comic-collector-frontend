import React from "react";

function MenuOptionButton(props) {
  return <button style={menuButtonStyle}>{props.label}</button>;
}

const menuButtonStyle = {
  float: "right",
  margin: "2px",
};

export default MenuOptionButton;
