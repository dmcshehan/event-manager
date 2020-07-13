import React from "react";

import { useDispatch } from "react-redux";
import { openInviteeModal } from "../../store/actionCreators/modal";

export default function AddInviteeButton({ ...props }) {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(openInviteeModal());
  }

  return (
    <button className='button is-success' onClick={openModal} {...props}>
      Add Invitee
    </button>
  );
}
