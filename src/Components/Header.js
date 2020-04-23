import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <div>Friki - comic collection app</div>
      <button>login</button>
      <button>my collection</button>
      <button>market place</button>
    </header>
  );
}

const headerStyle = {
  margin: " 16px auto",
  width: "60%",
  backgrondColor: "green",
  border: "3px solid yellow",
  padding: "8px",
  cursor: "pointer",
};
