export function getCookieData(name) {
  let cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookieValue ? cookieValue[2] : null;
}

export function isCookieSet(name) {
  return !!getCookieData(name);
}

export function setCookies(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + 24*60*60*1000*days);
  document.cookie = `${name}=${value};path=/;expires=${date.toGMTString()}`;
}

export function deleteCookie(name) {
  setCookies(name, '', -1);
}
