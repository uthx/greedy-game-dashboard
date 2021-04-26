import { combineReducers } from "redux";
import allAppsReducer from "./AllAppsList/allAppsReducer";
import appByIdReducer from "./GetStatsById/getByIdReducers";
import allStatsReducer from "./GetAllStats/getAllStatsReducer";
const rootReducer = combineReducers({
  allApps: allAppsReducer,
  byId: appByIdReducer,
  allStats: allStatsReducer,
});

export default rootReducer;
