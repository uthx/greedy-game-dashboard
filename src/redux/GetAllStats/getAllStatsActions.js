//for ALlStats
import {
  FETCH_ALL_STATS_SUCCESS,
  FETCH_ALL_STATS_REQUEST,
  FETCH_ALL_STATS_FAILURE,
} from "./getAllStatsTypes";
import axios from "axios";

import { GET_ALL_STATS as allStats } from "../urlConstants";

//action providers
export const fetchAllStatsRequest = () => {
  return {
    type: FETCH_ALL_STATS_REQUEST,
  };
};

export const fetchAllStatsSuccess = (appData) => {
  return {
    type: FETCH_ALL_STATS_SUCCESS,
    payload: appData,
  };
};

export const fetchAllStatsFailure = (error) => {
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
