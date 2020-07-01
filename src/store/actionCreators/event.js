import { db } from "../../auth/firebase";

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

function fetchEvents() {
  return (dispatch, getState) => {
    var eventsRef = db.collection("events");
    const { user } = getState().user;
    const { uid } = user;

    // Create a query against the collection.
    var query = eventsRef.where("uid", "==", uid);

    // query.get().then(function (querySnapshot) {
    //   querySnapshot.forEach(function (doc) {
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });

    query.onSnapshot(function (querySnapshot) {
      var events = [];
      querySnapshot.forEach(function (doc) {
        events.push(doc.data());
      });
      console.log(events);
    });
  };
}

export { addEvent, fetchEvents };
