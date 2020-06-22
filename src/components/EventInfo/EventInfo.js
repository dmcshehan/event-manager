import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";

const { Header, Content } = Card;

const { Title, Icon } = Header;

export default function EventMenu() {
  return (
    <div className={`column`}>
      <Card>
        <Header>
          <Title>Event Info</Title>
          <Icon>
            <Button>Add Event</Button>
          </Icon>
        </Header>
        <Content></Content>
      </Card>
    </div>
  );
}
