import produce from "immer";
import {
  SET_UPDATABLE_INVITEE,
  CLEAR_UPDATABLE_INVITEE,
} from "../actionTypes/invitee";

const initialState = {
  updatableInvitee: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case SET_UPDATABLE_INVITEE:
        draftState.updatableInvitee = payload.invitee;
        break;

      case CLEAR_UPDATABLE_INVITEE:
        draftState.updatableInvitee = null;
        break;

      default:
        break;
    }
  });
