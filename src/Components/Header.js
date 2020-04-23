import React from "react";
import LoginButton from "./Buttons/LoginButton";
import MenuButton from "./Buttons/MenuOptionButton";

function Header() {
  return (
    <header style={headerStyle}>
      <div>Friki - comic collection app</div>
      <div>
        <LoginButton label="Login" />
        <MenuButton label="My Collection" />
        <MenuButton label="Marketplace" />
      </div>
    </header>
  );
}

export default Header;

const headerStyle = {
  margin: " 16px auto",
  width: "60%",
  height: "40px",
  backgrondColor: "green",
  border: "3px solid yellow",
  padding: "8px",
  cursor: "pointer",
};
