import {
  FETCH_ALL_STATS_SUCCESS,
  FETCH_ALL_STATS_REQUEST,
  FETCH_ALL_STATS_FAILURE,
} from "./getAllStatsTypes";
import axios from "axios";

import { GET_ALL_STATS as allStats } from "../urlConstants";

//action providers
export const fetchAllStatsRequest = () => {
  console.log("stat request");
  return {
    type: FETCH_ALL_STATS_REQUEST,
  };
};

export const fetchAllStatsSuccess = (appData) => {
  console.log("stat Success");

  return {
    type: FETCH_ALL_STATS_SUCCESS,
    payload: appData,
  };
};

export const fetchAllStatsFailure = (error) => {
  console.log("stat Failure");

  return {
    type: FETCH_ALL_STATS_FAILURE,
    payload: error,
  };
};

export const fetchAllStats = () => {
  return function (dispatch) {
    dispatch(fetchAllStatsRequest());
    axios
      .get(`${allStats}`)
      .then(({ data }) => {
        dispatch(fetchAllStatsSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(fetchAllStatsFailure(message));
      });
  };
};
