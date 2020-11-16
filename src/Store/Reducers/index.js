import { combineReducers } from 'redux';
import publicReducer from './PublicReducer'
import serversReducer from "./ServersReducer";

export default combineReducers({
  isLoggedIn: publicReducer,
  serverData: serversReducer
});
