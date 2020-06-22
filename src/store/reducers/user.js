import produce from "immer";
import * as userActionTypes from "../actionTypes/user";

const initialState = {
  user: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case userActionTypes.USER_LOGIN_SUCCESS:
        draftState.user = payload.user;
        break;
      default:
        break;
    }
  });
