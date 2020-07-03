import React from "react";

import { useDispatch } from "react-redux";
import { openEventModal } from "../../../store/actionCreators/modal";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";

const { Header } = Card;
const { Title, Icon } = Header;

export default function EventMenuHeader() {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(openEventModal());
  }

  return (
    <Header>
      <Title size={3}>Events</Title>
      <Icon>
        <Button color='primary' onClick={openModal}>
          Add Event
        </Button>
      </Icon>
    </Header>
  );
}
