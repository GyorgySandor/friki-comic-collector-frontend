import React from "react";
import LoginButton from "./Buttons/LoginButton";

function Header() {
  return (
    <header style={headerStyle}>
      <div>Friki - comic collection app</div>
      <LoginButton />
      <button>my collection</button>
      <button>market place</button>
    </header>
  );
}

export default Header;

const headerStyle = {
  margin: " 16px auto",
  width: "60%",
  backgrondColor: "green",
  border: "3px solid yellow",
  padding: "8px",
  cursor: "pointer",
};
