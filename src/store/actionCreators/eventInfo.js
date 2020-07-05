import { SELECT_EVENT } from "../actionTypes/eventInfo";

function onSelectEvent(event) {
  return {
    type: SELECT_EVENT,
    payload: {
      event,
    },
  };
}

function selectEvent(_id) {
  return (dispatch, getState) => {
    const { events } = getState().event;
    const selected = events.find((event) => event._id === _id);
    dispatch(onSelectEvent(selected));
  };
}

export { selectEvent };
