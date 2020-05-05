import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBox from "./SearchBox/SearchBox";
import ItemList from "./ListingViews/ItemList";

export class MainArea extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="main-area" style={mainAreaStyle}>
        <SearchBox />
        <ItemList />
      </div>
    );
  }
}

const mainAreaStyle = {
  margin: "auto",
  width: "60%",
  height: "auto",
  backgroundColor: "white",
  border: "3px solid black",
  padding: "8px",
  boxShadow: "0 2px 3px #ccc",
};

export default MainArea;
