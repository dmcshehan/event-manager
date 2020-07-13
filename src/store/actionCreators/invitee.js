import { db } from "../../auth/firebase";
import {
  SET_UPDATABLE_INVITEE,
  CLEAR_UPDATABLE_INVITEE,
  EDIT_UPDATABLE_INVITEE,
} from "../actionTypes/invitee";

import { closeModal } from "./modal";

function onSetUpdatableInvitee(invitee) {
  return {
    type: SET_UPDATABLE_INVITEE,
    payload: {
      invitee,
    },
  };
}

function setUpdatableInvitee(inviteeId) {
  return (dispatch, getState) => {
    const { selectedEvent } = getState().eventInfo;
    const { invitees } = selectedEvent;
    const updatableInvitee = invitees.find(({ _id }) => _id === inviteeId);

    dispatch(onSetUpdatableInvitee(updatableInvitee));
  };
}

function clearUpdatableInvitee() {
  return {
    type: CLEAR_UPDATABLE_INVITEE,
  };
}

function editUpdatableInvitee(inviteeInfo) {
  return {
    type: EDIT_UPDATABLE_INVITEE,
    payload: {
      inviteeInfo,
    },
  };
}

function updateInvitee(invitee) {
  return (dispatch, getState) => {
    const { selectedEvent } = getState().eventInfo;
    const { _id } = selectedEvent;

    return new Promise(function (resolve, reject) {
      db.collection("events")
        .doc(_id)
        .collection("invitees")
        .doc(invitee._id)
        .update({
          ...invitee,
        })
        .then(function () {
          resolve("updated");
          dispatch(clearUpdatableInvitee());
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
  };
}

function addInvitee(invitee) {
  return (dispatch, getState) => {
    const { selectedEvent } = getState().eventInfo;
    const { _id } = selectedEvent;

    return new Promise(function (resolve, reject) {
      db.collection("events")
        .doc(_id)
        .collection("invitees")
        .add(invitee)
        .then(function (docRef) {
          dispatch(closeModal());
          resolve(docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
  };
}

function deleteInvitee(inviteeId) {
  return (dispatch, getState) => {
    const { selectedEvent } = getState().eventInfo;

    db.collection("events")
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

export {
  setUpdatableInvitee,
  deleteInvitee,
  addInvitee,
  clearUpdatableInvitee,
  editUpdatableInvitee,
  updateInvitee,
};
