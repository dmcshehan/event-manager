import { SELECT_EVENT } from "../actionTypes/eventInfo";

function selectEvent(_id) {
  return {
    type: SELECT_EVENT,
    payload: {
      _id,
    },
  };
}

export { selectEvent };
