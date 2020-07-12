import { db } from "../../auth/firebase";
import { FETCH_EVENTS_SUCCESS, CLEAR_EVENTS } from "../actionTypes/event";

import { closeModal } from "./modal";
import { clearSelectedEvent } from "./eventInfo";

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

    return new Promise(function (resolve, reject) {
      db.collection("events")
        .add({
          uid,
          ...eventInfo,
        })
        .then(function (docRef) {
          dispatch(closeModal());
          resolve(docRef.id);
          console.log("Document written :", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
  };
}

function deleteEvent(eventId) {
  return function (dispatch, getState) {
    const { selectedEvent } = getState().eventInfo;

    if (selectedEvent._id === eventId) {
      dispatch(clearSelectedEvent());
    }

    db.collection("events")
      .doc(eventId)
      .delete()
      .then(function () {
        console.error("Deleted");
      })
      .catch(function (error) {
        console.error("Error deleting document: ", error);
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

export { addEvent, fetchEvents, clearEvents, deleteEvent };
