import { FETCH_DATA_REQUEST } from "../constants";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      // Make the API request using fetch, axios, or any other library
      const response = await fetch("https://deependra-009.github.io/db.json");
      const data = await response.json();
    //   console.log(data);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
};
