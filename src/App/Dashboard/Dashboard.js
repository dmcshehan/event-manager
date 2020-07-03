import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import EventMenu from "../EventMenu/EventMenu";
import EventInfo from "../EventInfo/EventInfo";
import GridContainer from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";

import classNames from "./Dashboard.module.css";

export default function Dashboard() {
  const { user } = useSelector((state) => state.user);

  return user ? (
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
