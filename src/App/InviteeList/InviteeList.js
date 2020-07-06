import React from "react";

import Card from "react-bulma-components/lib/components/card";

import InviteeListHeader from "./InviteeListHeader/InviteeListHeader";

const { Content } = Card;

export default function InviteeList({ title }) {
  return (
    <Card>
      <InviteeListHeader title={title} />
      <Content></Content>
    </Card>
  );
}
