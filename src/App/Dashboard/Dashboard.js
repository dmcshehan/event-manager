import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import useIsLoggedIn from "../../hooks/useIsLoggedIn";

import EventMenu from "../EventMenu/EventMenu";
import EventInfo from "../EventInfo/EventInfo";
import EventInfoIntro from "../EventInfoIntro/EventInfoIntro";

import Columns from "react-bulma-components/lib/components/columns";

export default function Dashboard() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <section>
      <Columns>
        <EventMenu />
        {selectedEvent ? <EventInfo /> : <EventInfoIntro />}
      </Columns>
    </section>
  ) : (
    <Redirect to='/signin' />
  );
}
