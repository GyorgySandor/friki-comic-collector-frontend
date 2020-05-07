import axios from "axios";

/**api documentation at:
 * https://comicvine.gamespot.com/api/documentation
 * general usage:
 * params:
 * -api_key
 * -format: json/xml
 * -limit: number of items the reguest sends
 * -offset: offset the items in the reguest guery
 * -filed_list: list of fields the receive from each given object
 * for more details see the documentation
 */

const CVbaseUrl =
  "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/";
const CVKey = process.env.REACT_APP_COMICVINE_API_KEY;

export default {
  getSearchResults: (endpoint) => {
    return axios.get(CVbaseUrl + endpoint + "/", {
      params: {
        api_key: CVKey,
        format: "json",
        limit: 10,
        //field_list: "name",
        offset: 10,
        query: "dark horse",
        resources: "volume",
        resource_type: "volume",
      },
    });
  },
};
