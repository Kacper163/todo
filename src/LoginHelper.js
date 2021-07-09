import CookieHelper from "./CookieHelper"

class LoginHelper {

  static loginUser(username, password) {
    var COOKIE_SESSION_VALID = "SESSION_VALID"
    if (username == "Admin" && password == "zaq1@WSX") {
      CookieHelper.setCookie(COOKIE_SESSION_VALID, "true", 2);
      return true;
    }
    return false;
  }

  static logout() {
    var COOKIE_SESSION_VALID = "SESSION_VALID"
    CookieHelper.eraseCookie(COOKIE_SESSION_VALID);
  }

  static isLoggedIn() {
    var COOKIE_SESSION_VALID = "SESSION_VALID"
    return CookieHelper.getCookie(COOKIE_SESSION_VALID) != null;
  }

}

export default LoginHelper;
