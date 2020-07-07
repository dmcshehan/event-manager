import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";

import { openInviteeModal } from "../../../store/actionCreators/modal";

const { Header } = Card;

const { Title, Icon } = Header;

export default function EventMenu() {
  const dispatch = useDispatch();
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const { title } = selectedEvent;

  function openModal() {
    dispatch(openInviteeModal());
  }

  return (
    <Header>
      <Title>{title}</Title>
      <Icon>
        <Button color='primary' onClick={openModal}>
          Add Invitee
        </Button>
      </Icon>
    </Header>
  );
}
