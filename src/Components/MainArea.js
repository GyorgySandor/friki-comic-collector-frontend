import React, { Component } from "react";
import SearchBox from "./SearchBox/SearchBox";
import ItemList from "./ListingViews/ItemList";
import Axios from "axios";

const CVKey = process.env.REACT_APP_COMICVINE_API_KEY;
const CVbaseUrl =
  "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/";

export class MainArea extends Component {
  state = {
    items: [
      { name: "Amazing Spider-Man" },
      { name: "The Incredible Hulk" },
      { name: "Unchanny X-Men" },
    ],
  };

  async componentDidMount() {
    Axios.get(CVbaseUrl, {
      params: {
        api_key: CVKey,
        format: "json",
      },
    }).then((res) => {
      console.log(res);
    });
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
