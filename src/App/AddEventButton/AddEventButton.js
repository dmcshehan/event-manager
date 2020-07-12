import React from "react";

import { useDispatch } from "react-redux";
import { openEventModal } from "../../store/actionCreators/modal";

import Button from "react-bulma-components/lib/components/button";

export default function AddEventButton({ ...props }) {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(openEventModal());
  }

  return (
    <Button color='primary' onClick={openModal} {...props}>
      Add Event
    </Button>
  );
}
