import {
  FETCH_BY_ID_SUCCESS,
  FETCH_BY_ID_REQUEST,
  FETCH_BY_ID_FAILURE,
} from "./getByIdTypes";
import axios from "axios";

import { BY_APP_ID as byAppId } from "../urlConstants";

//action providers
export const fetchByIdRequest = () => {
  return {
    type: FETCH_BY_ID_REQUEST,
  };
};

export const fetchByIdSuccess = (appData) => {
  return {
    type: FETCH_BY_ID_SUCCESS,
    payload: appData,
  };
};

export const fetchByIdFailure = (error) => {
  return {
    type: FETCH_BY_ID_FAILURE,
    payload: error,
  };
};

export const fetchById = (id) => {
  return function (dispatch) {
    dispatch(fetchByIdRequest());
    axios
      .get(`${byAppId}${id}`)
      .then(({ data }) => {
        dispatch(fetchByIdSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(fetchByIdFailure(message));
      });
  };
};
