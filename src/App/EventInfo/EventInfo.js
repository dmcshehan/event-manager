import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "react-bulma-components/lib/components/card";
import Columns from "react-bulma-components/lib/components/columns";

import EventInfoHeader from "./EventInfoHeader/EventInfoHeader";
import InviteeLists from "../InviteeLists/InviteeLists";
import EventIntro from "../EventIntro/EventIntro";
import InviteeIntro from "../InviteeIntro/InviteeIntro";

import { selectEvent } from "../../store/actionCreators/eventInfo";

//hooks
import useHasInvitees from "../../hooks/useHasInvitees";

import classNames from "./EventInfo.module.css";

const { Content } = Card;
const { Column } = Columns;

export default function EventInfo() {
  const dispatch = useDispatch();
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const hasInvitees = useHasInvitees();

  useEffect(() => {
    if (selectedEvent) {
      dispatch(selectEvent(selectedEvent._id));
    }
  }, []);

  return (
    <Column>
      <Card className={classNames.eventInfoCard}>
        {selectedEvent ? (
          <>
            <EventInfoHeader />
            <Content>
              {hasInvitees ? <InviteeLists /> : <InviteeIntro />}
            </Content>
          </>
        ) : (
          <EventIntro />
        )}
      </Card>
    </Column>
  );
}
