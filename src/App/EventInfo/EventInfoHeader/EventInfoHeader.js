import React from "react";
import { useSelector } from "react-redux";

import Card from "react-bulma-components/lib/components/card";
import AddInviteeButton from "../../AddInviteeButton/AddInviteeButton";

const { Header } = Card;

const { Title, Icon } = Header;

export default function EventMenu() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const { title, venue } = selectedEvent;

  return (
    <Header>
      <p className='card-header-title'>
        <span className='title is-5'>{title}</span>
      </p>
      <Icon>
        <AddInviteeButton />
      </Icon>
    </Header>
  );
}
