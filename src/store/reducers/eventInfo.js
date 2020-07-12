import produce from "immer";
import { SELECT_EVENT, CLEAR_SELECTED_EVENT } from "../actionTypes/eventInfo";

const initialState = {
  selectedEvent: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case SELECT_EVENT:
        draftState.selectedEvent = payload.event;
        break;

      case CLEAR_SELECTED_EVENT:
        draftState.selectedEvent = null;
        break;

      default:
        break;
    }
  });
