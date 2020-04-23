import React from "react";

function LoginButton(props) {
  return <button style={loginButtonStyle}>{props.label}</button>;
}

export default LoginButton;

const loginButtonStyle = {
  float: "left",
  margin: "2px",
};
