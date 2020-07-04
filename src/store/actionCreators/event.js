import { db } from "../../auth/firebase";
import { FETCH_EVENTS_SUCCESS, CLEAR_EVENTS } from "../actionTypes/event";

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
        Promise.resolve("Done");
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };
}

function onFetchEventsSuccess(events) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: {
      events,
    },
  };
}
function fetchEvents() {
  return (dispatch, getState) => {
    var eventsRef = db.collection("events");
    const { user } = getState().user;
    const { uid } = user;

    var query = eventsRef.where("uid", "==", uid);

    const unsubscribe = query.onSnapshot(function (querySnapshot) {
      var events = [];
      querySnapshot.forEach(function (doc) {
        events.push({
          ...doc.data(),
          _id: doc.id,
        });
      });
      dispatch(onFetchEventsSuccess(events));
    });

    return unsubscribe;
  };
}

function clearEvents() {
  return {
    type: CLEAR_EVENTS,
  };
}
export { addEvent, fetchEvents, clearEvents };
