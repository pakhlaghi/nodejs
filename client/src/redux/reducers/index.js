import { combineReducers } from "redux";
import HomeReducer from "../home/reducer";
import DashboardReducer from "../dashboard/reducer";
import NewPageReducer from "../dashboard/modules/pageModule/newPage/reducer";
import PagesReducer from "../dashboard/modules/pageModule/pages/reducer";
import LoginReducer from "../login/reducer";
import AppReducer from "../app";

const rootReducer = combineReducers({
  home: HomeReducer,
  app: AppReducer,
  dashboard: DashboardReducer,
  dashboardNewPage: NewPageReducer,
  dashboardPages: PagesReducer,
  login: LoginReducer
});

export default rootReducer;
