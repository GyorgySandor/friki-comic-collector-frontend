import React, { Component } from "react";
import SearchBox from "./SearchBox/SearchBox";
import ItemList from "./ListingViews/ItemList";
import API from "../Components/API/API";

export class MainArea extends Component {
  state = {
    items: [
      /*{ name: "Amazing Spider-Man", id: 1 },
      { name: "The Incredible Hulk", id: 2 },
      { name: "Unchanny X-Men", id: 3 },*/
    ],
    endpoint: "volumes",
  };

  async componentDidMount() {
    let resultSet = await API.getSearchResults(
      this.state.endpoint,
      100,
      20,
      "name",
      "Punisher"
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
