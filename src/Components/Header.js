import React from "react";
import LoginButton from "./Buttons/LoginButton";
import MenuButton from "./Buttons/MenuOptionButton";

function Header() {
  return (
    <header style={headerStyle}>
      <div>Friki - Comic Collector</div>
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
  width: "auto",
  height: "40px",
  backgrondColor: "green",
  border: "3px solid black",
  padding: "8px",
  boxShadow: "0 2px 3px #ccc",
};
