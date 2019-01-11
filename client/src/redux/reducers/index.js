import { combineReducers } from "redux";
import HomeReducer from "../home/reducer";
import DashboardReducer from "../dashboard/reducer";
import NewPageReducer from "../dashboard/modules/newPage/reducer";
import LoginReducer from "../login/reducer";
import AppReducer from "../app";

const rootReducer = combineReducers({
  home: HomeReducer,
  app: AppReducer,
  dashboard: DashboardReducer,
  dashboardNewPage: NewPageReducer,
  login: LoginReducer
});

export default rootReducer;
