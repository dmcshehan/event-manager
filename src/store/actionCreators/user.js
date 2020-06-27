import firebase from "../../auth/firebase";
import googleProvider from "../../auth/providers/google";
import { db } from "../../auth/firebase";

import * as userActionTypes from "../actionTypes/user";

function userLoginSuccess(user) {
  return {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

function userLogoutSuccess() {
  return {
    type: userActionTypes.USER_LOGOUT_SUCCESS,
  };
}

export { userLoginSuccess, userLogoutSuccess };
