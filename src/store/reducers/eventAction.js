import produce from "immer";
import {
  SET_UPDATABLE_EVENT,
  CLEAR_UPDATABLE_EVENT,
} from "../actionTypes/eventAction";

const initialState = {
  updatableEvent: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case SET_UPDATABLE_EVENT:
        draftState.updatableEvent = payload.updatableEvent;
        break;

      case CLEAR_UPDATABLE_EVENT:
        draftState.updatableEvent = null;
        break;

      default:
        break;
    }
  });
