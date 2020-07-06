import { db } from "../../auth/firebase";
import { FETCH_EVENTS_SUCCESS, CLEAR_EVENTS } from "../actionTypes/event";

import { closeModal } from "./modal";

function onFetchEventsSuccess(events) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: {
      events,
    },
  };
}

function addEvent(eventInfo) {
  return function (dispatch, getState) {
    const { user } = getState().user;
    const { uid } = user;

    db.collection("events")
      .add({
        uid,
        ...eventInfo,
      })
      .then(function (docRef) {
        dispatch(closeModal());
        console.log("Document written :", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };
}

function fetchEvents() {
  return (dispatch, getState) => {
    var eventsRef = db.collection("events");
    const { user } = getState().user;
    const { uid } = user;

    var query = eventsRef.where("uid", "==", uid);

    const unsubscribe = query.onSnapshot(
      {
        // Listen for document metadata changes
        includeMetadataChanges: true,
      },
      function (querySnapshot) {
        var events = [];
        querySnapshot.forEach(function (doc) {
          events.push({
            ...doc.data(),
            _id: doc.id,
          });
        });
        console.log("fetchEvents");
        dispatch(onFetchEventsSuccess(events));
      }
    );

    return unsubscribe;
  };
}

function clearEvents() {
  return {
    type: CLEAR_EVENTS,
  };
}

function addInvitee(invitee) {
  return (dispatch, getState) => {
    const { selectedEvent } = getState().eventInfo;
    const { _id } = selectedEvent;

    db.collection("events")
      .doc(_id)
      .collection("invitees")
      .add(invitee)
      .then(function (docRef) {
        console.log("Document written :", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };
}
export { addEvent, fetchEvents, clearEvents, addInvitee };
