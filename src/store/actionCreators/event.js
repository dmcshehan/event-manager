import { db } from "../../auth/firebase";
import { FETCH_EVENTS_SUCCESS, CLEAR_EVENTS } from "../actionTypes/event";

import { SET_UPDATABLE_EVENT } from "../actionTypes/eventAction";

import { closeModal } from "./modal";
import { clearSelectedEvent } from "./eventInfo";
import { clearUpdatableEvent } from "./eventAction";
import {
  displaySuccessNotification,
  displayErrorNotification,
} from "./notification";

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
          dispatch(displaySuccessNotification("Event Successfully added!"));
        })
        .catch(function ({ message }) {
          reject(message);
          dispatch(displayErrorNotification(message));
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
        dispatch(displaySuccessNotification("Event Successfully delete!"));
      })
      .catch(function ({ message }) {
        dispatch(displayErrorNotification(message));
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

function updateEvent(eventInfo) {
  return function (dispatch, getState) {
    return new Promise(function (resolve, reject) {
      db.collection("events")
        .doc(eventInfo._id)
        .update({
          ...eventInfo,
        })
        .then(function () {
          resolve("update");
          dispatch(closeModal());
          dispatch(clearUpdatableEvent());
          dispatch(displaySuccessNotification("Event Successfully updated!"));
        })
        .catch(function ({ message }) {
          dispatch(displayErrorNotification(message));
        });
    });
  };
}

function onsetUpdatableEvent(updatableEvent) {
  return {
    type: SET_UPDATABLE_EVENT,
    payload: {
      updatableEvent,
    },
  };
}

function setUpdatableEvent(eventId) {
  return function (dispatch, getState) {
    const { events } = getState().event;
    const updatableEvent = events.find((event) => event._id === eventId);

    dispatch(onsetUpdatableEvent(updatableEvent));
  };
}

export {
  addEvent,
  fetchEvents,
  clearEvents,
  deleteEvent,
  setUpdatableEvent,
  updateEvent,
};
