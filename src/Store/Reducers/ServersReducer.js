import _ from 'lodash';
import { SERVER_DATA, SORT_SERVER_DATA } from "../Constants/serversConst";

const defaultServerState = {
  loaded: false, data: null
};

export default function serversReducer(state = defaultServerState, action) {
  switch(action.type) {
    case SERVER_DATA:
      return {
        ...state,
        loaded: true,
        data: action.res
      }

    case SORT_SERVER_DATA:
      return {
        data: action.direction === "asc"
          ? _.sortBy([...state.data], action.name)
          : _.sortBy([...state.data], action.name).reverse()
      }

    default:
      return state;
  }
}
