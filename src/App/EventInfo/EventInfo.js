import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Columns from "react-bulma-components/lib/components/columns";

import EventInfoHeader from "./EventInfoHeader/EventInfoHeader";
import InviteeForm from "../InviteeForm/InviteeForm";
import InviteeLists from "../InviteeLists/InviteeLists";

import classNames from "./EventInfo.module.css";

const { Content } = Card;
const { Column } = Columns;

export default function EventMenu() {
  return (
    <Column>
      <Card className={classNames.eventInfoCard}>
        <EventInfoHeader />
        <Content>
          <InviteeForm />
          <InviteeLists />
        </Content>
      </Card>
    </Column>
  );
}
