import React from "react";
import List from "react-bulma-components/lib/components/list";

import InviteeButtons from "../InviteeButtons/InviteeButtons";

import classNames from "./Invitee.module.css";

const { Item } = List;

export default function Invitee({ name, _id }) {
  return (
    <Item className={classNames.item}>
      {name}
      <InviteeButtons inviteeId={_id} name={name} />
    </Item>
  );
}
