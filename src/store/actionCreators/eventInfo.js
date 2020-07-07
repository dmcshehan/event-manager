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

    return unsubscribe;
  };
}

function deleteInvitee(inviteeId) {
  return (dispatch, getState) => {
    const { selectedEvent } = getState().eventInfo;

    var query = db
      .collection("events")
      .doc(selectedEvent._id)
      .collection("invitees")
      .doc(inviteeId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
}

export { selectEvent, deleteInvitee };
