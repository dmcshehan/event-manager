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
      <Title>
        {title} @ {venue}
      </Title>
      <Icon>
        <AddInviteeButton />
      </Icon>
    </Header>
  );
}
