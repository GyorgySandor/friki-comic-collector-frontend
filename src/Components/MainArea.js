import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBox from "./SearchBox/SearchBox";
import ItemList from "./ListingViews/ItemList";

export class MainArea extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <SearchBox />
        <ItemList />
      </div>
    );
  }
}

export default MainArea;
