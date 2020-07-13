import React from "react";

import Card from "react-bulma-components/lib/components/card";

const { Header } = Card;

const { Title, Icon } = Header;

export default function InviteeListHeader({ title, count }) {
  return (
    <Header>
      <Title>{title}</Title>
      <Icon>
        <span className='tag is-info is-medium'>Invitees : {count}</span>
      </Icon>
    </Header>
  );
}
