import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";
import Columns from "react-bulma-components/lib/components/columns";

import classNames from "./EventInfo.module.css";

const { Header, Content } = Card;
const { Column } = Columns;
const { Title, Icon } = Header;

export default function EventMenu() {
  return (
    <Column>
      <Card className={classNames.eventInfoCard}>
        <Header>
          <Title>Event Info</Title>
          <Icon>
            <Button>Add Event</Button>
          </Icon>
        </Header>
        <Content></Content>
      </Card>
    </Column>
  );
}
