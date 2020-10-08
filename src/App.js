import React from "react";
import Header from "./Components/Header";
import Layout from "./hoc/Layout/Layout";

import "./App.css";
import MainArea from "./Components/MainArea";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <MainArea />
      </Layout>
    </div>
  );
}

export default App;
