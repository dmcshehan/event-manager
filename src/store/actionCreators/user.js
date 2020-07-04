import firebase from "../../auth/firebase";
import { clearEvents } from "./event";

import * as userActionTypes from "../actionTypes/user";

function userLoginSuccess(user) {
  return {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

function onUserLogoutSuccess() {
  return {
    type: userActionTypes.USER_LOGOUT_SUCCESS,
  };
}

function logoutUser() {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch(onUserLogoutSuccess());
        dispatch(clearEvents());
      })
      .catch(function (error) {
        // An error happened.
      });
  };
}

export { userLoginSuccess, logoutUser };
