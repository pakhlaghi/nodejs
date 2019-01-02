import { combineReducers } from "redux";
import LayoutReducer from "./layout/reducer";

const appReducer = combineReducers({
  layout: LayoutReducer
});

export default appReducer;
