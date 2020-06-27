import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import EventMenu from "../EventMenu/EventMenu";
import EventInfo from "../EventInfo/EventInfo";
import GridContainer from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";

import { fetchEvents } from "../../store/actionCreators/event";

import classNames from "./Dashboard.module.css";

export default function Dashboard({ onAddEventBtnClick }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchEvents());
    }
  });

  return user ? (
    <section className={classNames.dashboard}>
      <GridContainer fluid>
        <Columns>
          <EventMenu onAddEventBtnClick={onAddEventBtnClick} />
          <EventInfo />
        </Columns>
      </GridContainer>
    </section>
  ) : (
    <Redirect to='/signin' />
  );
}
