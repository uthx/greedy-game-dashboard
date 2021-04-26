import {
  FETCH_BY_ID_SUCCESS,
  FETCH_BY_ID_REQUEST,
  FETCH_BY_ID_FAILURE,
} from "./getByIdTypes";

const initialState = {
  loading: false,
  appDataByIdStats: null,
  error: "",
};

const appByIdReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        appDataByIdStats: actions.payload,
      };
    case FETCH_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};
export default appByIdReducer;
