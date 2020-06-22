import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";

const { Header, Content } = Card;

const { Title, Icon } = Header;

export default function EventMenu() {
  return (
    <div className={`column is-one-quarter`}>
      <Card>
        <Header>
          <Title size={3}>Events</Title>
          <Icon>
            <Button color='primary'>Add Event</Button>
          </Icon>
        </Header>
        <Content></Content>
      </Card>
    </div>
  );
}
