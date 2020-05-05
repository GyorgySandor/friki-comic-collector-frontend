import React from "react";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox/SearchBox.js";

import "./App.css";
import MainArea from "./Components/MainArea";

function App() {
  return (
    <div className="App">
      <Header />
      <MainArea />
    </div>
  );
}

export default App;
