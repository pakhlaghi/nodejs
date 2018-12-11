import { combineReducers } from "redux";
import HomeReducer from "../home/reducer";
import DashboardReducer from "../dashboard/reducer";
import LoginReducer from "../login/reducer";
import AppReducer from "../app";

const rootReducer = combineReducers({
  home: HomeReducer,
  app: AppReducer,
  dashboard: DashboardReducer,
  login: LoginReducer
});

export default rootReducer;
