import { deleteCookie, isCookieSet, setCookies } from "../../Utilities/cookieParser";

let initState = isCookieSet('sessionToken');

export default function publicReducer(state = initState, action) {
  switch(action.type) {
    case 'LOG_IN_DATA':
      setCookies('sessionToken', action.res.token, 3)
      return isCookieSet('sessionToken');

    case 'GET_LOG_ERROR':
      alert(action.error);
      break;

      case 'LOG_OUT':
        deleteCookie('sessionToken');
        return false;

    default:
      return state;
  }
}
