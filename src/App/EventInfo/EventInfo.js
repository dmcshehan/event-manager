import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "react-bulma-components/lib/components/card";
import Columns from "react-bulma-components/lib/components/columns";

import EventInfoHeader from "./EventInfoHeader/EventInfoHeader";
import InviteeLists from "../InviteeLists/InviteeLists";

import { selectEvent } from "../../store/actionCreators/eventInfo";

import classNames from "./EventInfo.module.css";

const { Content } = Card;
const { Column } = Columns;

export default function EventInfo() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedEvent) {
      dispatch(selectEvent(selectedEvent._id));
    }
  }, [selectedEvent._id]);

  return (
    <Column>
      <Card className={classNames.eventInfoCard}>
        <EventInfoHeader />
        <Content>
          <InviteeLists />
        </Content>
      </Card>
    </Column>
  );
}
