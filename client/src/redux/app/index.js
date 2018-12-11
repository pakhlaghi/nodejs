import { combineReducers} from 'redux';
import AuthReducer from './auth/reducer'

const appReducer = combineReducers({
    auth: AuthReducer
});

export default appReducer;