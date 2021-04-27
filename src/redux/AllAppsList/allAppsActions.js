import {
  FETCH_ALL_SUCCESS,
  FETCH_ALL_REQUEST,
  FETCH_ALL_FAILURE,
} from "./allAppsTypes";
import axios from "axios";
import { ALL_APPS_LIST as appListUrl } from "../urlConstants";
//action providers
export const fetchAllRequest = () => {
  return {
    type: FETCH_ALL_REQUEST,
  };
};

export const fetchAllSuccess = (allAppsData) => {
  return {
    type: FETCH_ALL_SUCCESS,
    payload: allAppsData,
  };
};

export const fetchAllFailure = (error) => {
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
