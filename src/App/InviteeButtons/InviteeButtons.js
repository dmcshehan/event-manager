import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteInvitee } from "../../store/actionCreators/invitee";
import { setUpdatableInvitee } from "../../store/actionCreators/invitee";

function Buttons({ inviteeId, name }) {
  const { selectedEvent } = useSelector((state) => state.eventInfo);

  const dispatch = useDispatch();
  const { title } = selectedEvent;

  function deleteInviteeFromEvent() {
    if (
      window.confirm(`Are you sure you want to remove ${name} from ${title}?`)
    ) {
      dispatch(deleteInvitee(inviteeId));
    }
  }

  function makeInviteeUpdatable() {
    dispatch(setUpdatableInvitee(inviteeId));
  }

  return (
    <p className='buttons'>
      <button
        className='button is-small is-info is-outlined'
        onClick={makeInviteeUpdatable}
      >
        <span className='icon is-small'>
          <i className='far fa-edit'></i>
        </span>
      </button>
      <button
        className='button is-small is-danger is-outlined'
        onClick={deleteInviteeFromEvent}
      >
        <span className='icon'>
          <i className='far fa-trash-alt'></i>
        </span>
      </button>
    </p>
  );
}

export default Buttons;
