import {
  FETCH_ALL_SUCCESS,
  FETCH_ALL_REQUEST,
  FETCH_ALL_FAILURE,
} from "./allAppsTypes";
import axios from "axios";
import { ALL_APPS_LIST as appListUrl } from "../urlConstants";
//action providers
export const fetchAllRequest = () => {
  console.log("fetch all request");
  return {
    type: FETCH_ALL_REQUEST,
  };
};

export const fetchAllSuccess = (allAppsData) => {
  console.log("fetch all success");

  return {
    type: FETCH_ALL_SUCCESS,
    payload: allAppsData,
  };
};

export const fetchAllFailure = (error) => {
  console.log("fetch all failure");

  return {
    type: FETCH_ALL_FAILURE,
    payload: error,
  };
};

export const fetchAll = () => {
  return function (dispatch) {
    dispatch(fetchAllRequest());
    axios
      .get(appListUrl)
      .then(({ data }) => {
        dispatch(fetchAllSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(fetchAllFailure(message));
      });
  };
};
