import produce from "immer";
import { FETCH_EVENTS_SUCCESS } from "../actionTypes/event";

const initialState = {
  events: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_EVENTS_SUCCESS:
        draftState.events = payload.events;
        break;

      default:
        break;
    }
  });
