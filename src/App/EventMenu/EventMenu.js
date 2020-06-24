import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";
import Columns from "react-bulma-components/lib/components/columns";

const { Header, Content } = Card;
const { Column } = Columns;
const { Title, Icon } = Header;

export default function EventMenu({ onAddEventBtnClick }) {
  return (
    <Column size={3}>
      <Card>
        <Header>
          <Title size={3}>Events</Title>
          <Icon>
            <Button color='primary' onClick={onAddEventBtnClick}>
              Add Event
            </Button>
          </Icon>
        </Header>
        <Content></Content>
      </Card>
    </Column>
  );
}
