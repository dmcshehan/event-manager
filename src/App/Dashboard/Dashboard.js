import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import useIsLoggedIn from "../../hooks/useIsLoggedIn";

import EventMenu from "../EventMenu/EventMenu";
import EventInfo from "../EventInfo/EventInfo";
import GridContainer from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";

import { fetchEvents } from "../../store/actionCreators/event";

import classNames from "./Dashboard.module.css";

export default function Dashboard() {
  const dispatch = useDispatch();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (isLoggedIn) {
      const unsubscribe = dispatch(fetchEvents());

      return () => {
        unsubscribe();
      };
    }
  });

  return isLoggedIn ? (
    <section className={classNames.dashboard}>
      <GridContainer fluid>
        <Columns>
          <EventMenu />
          <EventInfo />
        </Columns>
      </GridContainer>
    </section>
  ) : (
    <Redirect to='/signin' />
  );
}
