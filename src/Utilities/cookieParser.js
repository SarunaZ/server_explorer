/**
 * @param name {string}
 * @return {string}
 */
export function getCookieData(name) {
  let cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookieValue ? cookieValue[2] : null;
}

/**
 * @param name {string}
 * @return {boolean}
 */
export function isCookieSet(name) {
  return !!getCookieData(name);
}

/**
 * @param name {string}
 * @param value {string}
 * @param days {number}
 */
export function setCookies(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + 24*60*60*1000*days);
  document.cookie = `${name}=${value};path=/;expires=${date.toGMTString()}`;
}

/**
 * @param name {string}
 */
export function deleteCookie(name) {
  setCookies(name, '', -1);
}
