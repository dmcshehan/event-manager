import produce from "immer";
import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from "../actionTypes/dropdown";

const initialState = {
  isDropdownOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case OPEN_DROPDOWN:
        draftState.isDropdownOpen = true;
        break;
      case CLOSE_DROPDOWN:
        draftState.isDropdownOpen = false;
        break;
      default:
        break;
    }
  });
