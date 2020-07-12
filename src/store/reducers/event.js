import produce from "immer";
import { FETCH_EVENTS_SUCCESS, CLEAR_EVENTS } from "../actionTypes/event";

const initialState = {
  events: [],
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_EVENTS_SUCCESS:
        draftState.events = payload.events;
        break;

      case CLEAR_EVENTS:
        draftState.events = [];
        break;

      default:
        break;
    }
  });
