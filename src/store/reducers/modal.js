import produce from "immer";
import * as modalActionTypes from "../actionTypes/modal";

const initialState = {
  currentlyOpenModal: "event",
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case modalActionTypes.OPEN_MODAL:
        draftState.currentlyOpenModal = payload.modalName;
        break;
      case modalActionTypes.CLOSE_MODAL:
        draftState.currentlyOpenModal = null;
        break;
      default:
        break;
    }
  });
