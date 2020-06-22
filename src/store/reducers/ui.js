import produce from "immer";
import * as uiActionTypes from "../actionTypes/ui";

const initialState = {
  dropdownIsOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case uiActionTypes.DROPDOWN_TOGGLE:
        draftState.user = payload.user;
        break;
      default:
        break;
    }
  });
