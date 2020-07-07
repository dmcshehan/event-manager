import { SET_UPDATABLE_INVITEE } from "../actionTypes/invitee";

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

export { setUpdatableInvitee };
