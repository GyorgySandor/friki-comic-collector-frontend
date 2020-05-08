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
  /**
   * @param endpoint the endpoint of the api to target e.g 'search','volume','issue'
   * @param limit the number of items to receive
   * @param offset return results from the offset
   * @param filterFiled the result field to filter by
   * @param filterValue the result field value to filter by
   */
  getSearchResults: (endpoint, limit, offset, filterField, filterVale) => {
    return axios.get(CVbaseUrl + endpoint + "/", {
      params: {
        api_key: CVKey,
        format: "json",
        filter: filterField + ":" + filterVale,
        limit: limit,
        offset: offset,
        field_list: "name,id,publisher",
        //resource_type: "volume",
      },
    });
  },
};
