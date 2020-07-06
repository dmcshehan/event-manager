import React from "react";

import Card from "react-bulma-components/lib/components/card";
import List from "react-bulma-components/lib/components/list";

import InviteeListHeader from "./InviteeListHeader/InviteeListHeader";
import Invitee from "../Invitee/Invitee";

const { Content } = Card;

export default function InviteeList({ title, invitees }) {
  let inviteeList = [];
  const isEmpty = invitees.length === 0;

  if (!isEmpty) {
    inviteeList = invitees.map((invitee) => (
      <Invitee key={invitee._id} {...invitee} />
    ));
  }

  return (
    <Card>
      <InviteeListHeader title={title} count={inviteeList.length} />
      <Content>{isEmpty ? "No Invitees" : <List>{inviteeList}</List>}</Content>
    </Card>
  );
}
