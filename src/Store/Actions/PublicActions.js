import { LOG_IN_DATA, LOG_OUT } from "../Constants/publicConst";

const tokenBaseUrl = process.env.REACT_APP_TOKENS_API_URL;

export const logoutAction = () => {
  return {
    type: LOG_OUT
  }
}

export const setLogInData = (res) => {
  return {
    type: LOG_IN_DATA,
    res
  }
}

export const loginAction = (loginFormData = null) => {
  let requestParameters = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(loginFormData)
  }

  return dispatch => {
    fetch(tokenBaseUrl, requestParameters)
      .then(res => res.json())
      .then(res => {
        if (!res.message) {
          dispatch(setLogInData(res))
        } else {
          throw new Error(res.message);
        }
      })
      .catch(error => alert(error));
  }
}
