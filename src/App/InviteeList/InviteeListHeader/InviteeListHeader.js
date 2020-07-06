import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";

const { Header } = Card;

const { Title, Icon } = Header;

export default function InviteeListHeader({ title, count }) {
  return (
    <Header>
      <Title>{title}</Title>
      <Icon>
        <Button>Invitees : {count}</Button>
      </Icon>
    </Header>
  );
}
