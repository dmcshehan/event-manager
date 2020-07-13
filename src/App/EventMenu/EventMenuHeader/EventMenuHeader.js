import React from "react";

import Card from "react-bulma-components/lib/components/card";

import AddEventButton from "../../AddEventButton/AddEventButton";

const { Header } = Card;
const { Title, Icon } = Header;

export default function EventMenuHeader() {
  return (
    <Header>
      <Title size={3}>Events</Title>
      <Icon>
        <AddEventButton />
      </Icon>
    </Header>
  );
}
