import React from "react";

import Columns from "react-bulma-components/lib/components/columns";
import InviteeList from "../InviteeList/InviteeList";

const { Column } = Columns;

export default function InviteeLists() {
  return (
    <div>
      <Columns>
        <Column>
          <InviteeList title='Confirmed' />
        </Column>
        <Column>
          <InviteeList title='Not Confirmed' />
        </Column>
      </Columns>
    </div>
  );
}
