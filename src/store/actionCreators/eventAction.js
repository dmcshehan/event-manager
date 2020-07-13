import { CLEAR_UPDATABLE_EVENT } from "../actionTypes/eventAction";

function clearUpdatableEvent() {
  return {
    type: CLEAR_UPDATABLE_EVENT,
  };
}

export { clearUpdatableEvent };
