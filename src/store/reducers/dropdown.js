import produce from "immer";
import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from "../actionTypes/dropdown";

const initialState = {
  isOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case OPEN_DROPDOWN:
        draftState.isOpen = true;
        break;
      case CLOSE_DROPDOWN:
        draftState.isOpen = false;
        break;
      default:
        break;
    }
  });
