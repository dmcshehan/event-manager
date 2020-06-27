import { db } from "../../auth/firebase";

function addEvent(eventInfo) {
  return function (dispatch, getState) {
    db.collection("events")
      .add({
        ...eventInfo,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };
}

function fetchEvents() {
  return (dispatch, getState) => {
    console.log("fetchEvents");
    var eventsRef = db.collection("events");
    const { user } = getState().user;
    const { uid } = user;

    // Create a query against the collection.
    var query = eventsRef.where("uid", "==", uid);

    query.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
      });
    });
  };
}

export { addEvent, fetchEvents };
