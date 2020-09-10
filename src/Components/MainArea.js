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
  /* 
  async componentDidMount() {
    let resultSet = await API.getSearchResults(
      this.state.endpoint,
      100,
      20,
      "name",
      this.state.searchWorld
    );
    this.setState({ items: resultSet.data.results });
    console.log(resultSet);
  } */

  handleSearchFieldChange = (event) => {
    this.setState({ searchWorld: event.target.value });
  };

  searchChangeHandler = async (event) => {
    event.preventDefault();
    let resultSet = await API.getSearchResults(
      this.state.endpoint,
      100,
      this.state.offset,
      "name",
      this.state.searchWorld
    );
    this.setState({ items: resultSet.data.results });
  };

  searchPageNextHandler = (event) => {
    this.setState({ offset: this.state.offset + 100 });
    this.searchChangeHandler(event);
  };

  searchPagePreviousHandler = (event) => {
    this.setState({ offset: this.state.offset - 100 });
    this.searchChangeHandler(event);
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
