import {
  FETCH_ALL_SUCCESS,
  FETCH_ALL_REQUEST,
  FETCH_ALL_FAILURE,
} from "./allAppsTypes";

//Initial State
const initialState = {
  loading: false,
  allAppsData: null,
  error: "",
};
//reducer function

const allAppsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        allAppsData: actions.payload,
      };
    case FETCH_ALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default allAppsReducer;
