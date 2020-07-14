import React from "react";

import { useDispatch } from "react-redux";
import { openInviteeModal } from "../../store/actionCreators/modal";

export default function AddInviteeButton({ className, ...props }) {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(openInviteeModal());
  }

  return (
    <button
      className={`button is-success ${className}`}
      onClick={openModal}
      {...props}
    >
      Add Invitee
    </button>
  );
}
