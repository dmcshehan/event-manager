import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import useHasEvents from "../../hooks/useHasEvents";

import EventMenu from "../EventMenu/EventMenu";
import EventInfo from "../EventInfo/EventInfo";
import EventInfoIntro from "../EventInfoIntro/EventInfoIntro";

import Columns from "react-bulma-components/lib/components/columns";

export default function Dashboard() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const isLoggedIn = useIsLoggedIn();
  const hasEvents = useHasEvents();

  return isLoggedIn ? (
    hasEvents ? (
      <section>
        <Columns>
          <EventMenu />
          {selectedEvent ? <EventInfo /> : <EventInfoIntro />}
        </Columns>
      </section>
    ) : (
      <Redirect to='/intro' />
    )
  ) : (
    <Redirect to='/signin' />
  );
}
