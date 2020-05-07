import React, { Component } from "react";
import SearchBox from "./SearchBox/SearchBox";
import ItemList from "./ListingViews/ItemList";
import API from "../Components/API/API";

/**api documentation at:
 * https://comicvine.gamespot.com/api/documentation
 * general usage:
 * params:
 * -api_key
 * -format: json/xml/jsonp
 * -limit: number of items the reguest
 * -offset: offset the items in the reguest guery
 * -filed_list: list of fields the receive from each given object
 * for more details see the documentation
 */

const CVKey = process.env.REACT_APP_COMICVINE_API_KEY;

export class MainArea extends Component {
  state = {
    items: [
      { name: "Amazing Spider-Man" },
      { name: "The Incredible Hulk" },
      { name: "Unchanny X-Men" },
    ],
  };

  /*
  async componentDidMount() {
    Axios.get(CVbaseUrl, {
      params: {
        api_key: CVKey,
        format: "json",
        limit: 10,
        //field_list: "name",
        query: "spider-man",
        resources: "volume",
        resource_type: "volume",
        offset: 0,
      },
    }).then((res) => {
      console.log(res);
      this.setState({ items: res.data.results });
    });
  }
  */

  async componentDidMount() {
    let resultSet = await API.get("/search", {
      params: {
        api_key: CVKey,
        format: "json",
        limit: 10,
        //field_list: "name",
        query: "spider-man",
        resources: "volume",
        resource_type: "volume",
        offset: 0,
      },
    });

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
