import React from "react";
import { useSelector } from "react-redux";
import Columns from "react-bulma-components/lib/components/columns";

import EventInfoTitle from "../EventInfoTitle/EventInfoTitle";
import SumarryTile from "../SummaryTile/SummaryTile";

import classNames from "./EventSummary.module.css";

const { Column } = Columns;

export default function EventSummary() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const { title } = selectedEvent;
  return (
    <div>
      <Columns className={classNames.columns}>
        <Column size={6}>
          <EventInfoTitle>{title}</EventInfoTitle>
        </Column>

        <Column size={2}>
          <SumarryTile title='All Invitees' value={50} />
        </Column>
      </Columns>
    </div>
  );
}
