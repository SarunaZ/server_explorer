import { getCookieData } from "../../Utilities/cookieParser";
import { SERVER_DATA, SORT_SERVER_DATA } from "../Constants/serversConst";

export const getServerDataAction = () => {
  const token = getCookieData('sessionToken');
  const serverBaseUrl = process.env.REACT_APP_SERVERS_DATA_API_URL;
  let requestParameters = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      "Authorization": `${ token }`,
    }),
  }

  return dispatch => {
    fetch(serverBaseUrl, requestParameters)
      .then(res => res.json())
      .then(res => {
        if (!res.message) {
          dispatch(setServerData(res))
        } else {
          throw new Error(res.message);
        }
      })
      .catch(error => alert(error))
  }
}

export const sortDataAction = (name, direction) => {
  return {
    type: SORT_SERVER_DATA,
    name,
    direction
  }
}

export const setServerData = (res) => {
  return {
    type: SERVER_DATA,
    res
  }
}