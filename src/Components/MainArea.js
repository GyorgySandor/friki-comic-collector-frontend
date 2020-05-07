import React, { Component } from "react";
import SearchBox from "./SearchBox/SearchBox";
import ItemList from "./ListingViews/ItemList";
import API from "../Components/API/API";

export class MainArea extends Component {
  state = {
    items: [
      { name: "Amazing Spider-Man" },
      { name: "The Incredible Hulk" },
      { name: "Unchanny X-Men" },
    ],
    endpoint: "volumes",
  };

  async componentDidMount() {
    let resultSet = await API.getSearchResults(
      this.state.endpoint,
      10,
      10,
      "name",
      "spider-man"
    );
    this.setState({ items: resultSet.data.results });
    console.log(resultSet);
  }

  render() {
    return (
      <div className="main-area" style={mainAreaStyle}>
        <SearchBox />
        <ItemList items={this.state.items} />
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
