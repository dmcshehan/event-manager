import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Columns from "react-bulma-components/lib/components/columns";

import EventInfoHeader from "./EventInfoHeader/EventInfoHeader";
import EventSummary from "../EventSummary/EventSummary";
import InviteeForm from "../InviteeForm/InviteeForm";
import classNames from "./EventInfo.module.css";

const { Content } = Card;
const { Column } = Columns;

export default function EventMenu() {
  return (
    <Column>
      <Card className={classNames.eventInfoCard}>
        <EventInfoHeader />
        <Content>
          <EventSummary />
          <InviteeForm />
        </Content>
      </Card>
    </Column>
  );
}
