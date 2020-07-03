import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Columns from "react-bulma-components/lib/components/columns";
import EventList from "../EventList/EventList";
import EventMenuHeader from "./EventMenuHeader/EventMenuHeader";

const { Content } = Card;
const { Column } = Columns;

export default function EventMenu() {
  return (
    <Column size={3}>
      <Card>
        <EventMenuHeader />
        <Content>
          <EventList />
        </Content>
      </Card>
    </Column>
  );
}
