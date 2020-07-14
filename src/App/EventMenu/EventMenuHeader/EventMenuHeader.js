import React from "react";

import Card from "react-bulma-components/lib/components/card";

import AddEventButton from "../../AddEventButton/AddEventButton";

const { Header } = Card;
const { Title, Icon } = Header;

export default function EventMenuHeader() {
  return (
    <Header>
      <p className='card-header-title'>
        <span className='title is-5'>Events</span>
      </p>

      <Icon>
        <AddEventButton />
      </Icon>
    </Header>
  );
}
