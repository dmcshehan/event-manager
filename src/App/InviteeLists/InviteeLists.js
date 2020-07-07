import React, { useState } from "react";
import { useSelector } from "react-redux";

import Columns from "react-bulma-components/lib/components/columns";
import InviteeList from "../InviteeList/InviteeList";

const { Column } = Columns;

export default function InviteeLists() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const { invitees } = selectedEvent;

  const confirmed = invitees.filter(
    (invitee) => invitee.status === "confirmed"
  );

  const unconfirm = invitees.filter(
    (invitee) => invitee.status === "unconfirm"
  );

  return (
    <div>
      <Columns>
        <Column>
          <InviteeList title='Confirmed' invitees={confirmed} />
        </Column>
        <Column>
          <InviteeList title='Not Confirmed' invitees={unconfirm} />
        </Column>
      </Columns>
    </div>
  );
}
