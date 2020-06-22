import * as userActionTypes from "../actionTypes/user";

function userLoginSuccess(user) {
  return {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

export { userLoginSuccess };
