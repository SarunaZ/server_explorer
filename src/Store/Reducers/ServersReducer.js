import _ from 'lodash';
import { SERVER_DATA, SORT_SERVER_DATA } from "../Constants/serversConst";
import { SERVERS_SORTING_ASC } from "../../Components/Servers/serverConstants";

const defaultServerState = {
  data: null
};

export default function serversReducer(state = defaultServerState, action) {
  switch(action.type) {
    case SERVER_DATA:
      return {
        ...state,
        data: action.res
      }

    case SORT_SERVER_DATA:
      return {
        data: action.direction === SERVERS_SORTING_ASC
          ? _.sortBy(state.data, action.name)
          : _.sortBy(state.data, action.name).reverse()
      }

    default:
      return state;
  }
}
