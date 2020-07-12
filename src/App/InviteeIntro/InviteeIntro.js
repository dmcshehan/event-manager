import React from "react";

import Columns from "react-bulma-components/lib/components/columns";
import Card from "react-bulma-components/lib/components/card";

import party from "../../assets/images/party.svg";
import AddEInviteeButton from "../AddInviteeButton/AddInviteeButton";

import classNames from "./InviteeIntro.module.css";

const { Column } = Columns;
const { Content } = Card;

export default function InviteeIntro() {
  return (
    <Column>
      <Content>
        <h2 className={`title is-4 has-text-centered ${classNames.title}`}>
          Add Invitees to your event!
        </h2>
        <figure className={`image ${classNames.image}`}>
          <img src={party} alt='Calendar' />
        </figure>
        <AddEInviteeButton className={classNames.addInviteeBtn} />
      </Content>
    </Column>
  );
}
