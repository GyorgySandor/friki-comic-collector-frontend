import React, { Component } from "react";
import SearchBox from "./SearchBox/SearchBox";
import ItemList from "./ListingViews/ItemList";
import API from "../Components/API/API";

export class MainArea extends Component {
  state = {
    items: [],
    endpoint: "volumes",
    searchWorld: "",
    offset: 0,
  };

  handleSearchFieldChange = (event) => {
    this.setState({ searchWorld: event.target.value });
  };

  searchChangeHandler = async (event, offSet) => {
    let newOffset = "";

    if (offSet === undefined) {
      newOffset = this.state.offset;
    } else {
      newOffset = offSet;
    }
    event.preventDefault();
    let resultSet = await API.getSearchResults(
      this.state.endpoint,
      100,
      newOffset,
      "name",
      this.state.searchWorld
    );
    this.setState({ items: resultSet.data.results });
  };

  searchPageNextHandler = (event) => {
    const newOffset = this.state.offset + 100;
    this.setState({ offset: newOffset });
    this.searchChangeHandler(event, newOffset);
    console.log(this.state);
  };

  searchPagePreviousHandler = (event) => {
    const newOffset = this.state.offset - 100;
    this.setState({ offset: newOffset });
    this.searchChangeHandler(event, newOffset);
    console.log(this.state);
  };

  render() {
    return (
      <div className="main-area" style={mainAreaStyle}>
        <SearchBox
          submit={this.searchChangeHandler}
          change={this.handleSearchFieldChange}
        />
        <ItemList
          items={this.state.items}
          next={this.searchPageNextHandler}
          previous={this.searchPagePreviousHandler}
        />
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
