import React from "react";

import { useDispatch } from "react-redux";
import { openInviteeModal } from "../../store/actionCreators/modal";

import Button from "react-bulma-components/lib/components/button";

export default function AddInviteeButton({ ...props }) {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(openInviteeModal());
  }

  return (
    <Button color='primary' onClick={openModal} {...props}>
      Add Invitee
    </Button>
  );
}
