import { db } from "../../auth/firebase";
import { SELECT_EVENT } from "../actionTypes/eventInfo";

function onSelectEvent(event) {
  return {
    type: SELECT_EVENT,
    payload: {
      event,
    },
  };
}

function selectEvent(eventId) {
  return (dispatch, getState) => {
    const { events } = getState().event;
    const selected = events.find((event) => event._id === eventId);
    const { _id } = selected;

    var query = db.collection("events").doc(_id).collection("invitees");

    const unsubscribe = query.onSnapshot(function (querySnapshot) {
      var invitees = [];
      querySnapshot.forEach(function (doc) {
        invitees.push({
          ...doc.data(),
          _id: doc.id,
        });
      });

      const completeEvent = {
        ...selected,
        invitees,
      };
      dispatch(onSelectEvent(completeEvent));
    });
  };
}

export { selectEvent };
