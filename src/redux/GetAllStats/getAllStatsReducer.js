import {
  FETCH_ALL_STATS_SUCCESS,
  FETCH_ALL_STATS_REQUEST,
  FETCH_ALL_STATS_FAILURE,
} from "./getAllStatsTypes";

const initialState = {
  loading: false,
  allStatsData: null,
  error: "",
};

const allStatsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_ALL_STATS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        allStatsData: actions.payload,
      };
    case FETCH_ALL_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};
export default allStatsReducer;
