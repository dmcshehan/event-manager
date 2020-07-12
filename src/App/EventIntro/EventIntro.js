import React from "react";
import { Redirect } from "react-router-dom";

import Columns from "react-bulma-components/lib/components/columns";
import schedule from "../../assets/images/schedule.svg";
import AddEventButton from "../AddEventButton/AddEventButton";

//hooks

import useHasEvents from "../../hooks/useHasEvents.js";

import classNames from "./EventIntro.module.css";

const { Column } = Columns;

export default function EventIntro() {
  const hasEvents = useHasEvents();

  return hasEvents ? (
    <Redirect to='/dashboard' />
  ) : (
    <Column>
      <h2 className={`title is-4 has-text-centered ${classNames.title}`}>
        Add an Event to your list!
      </h2>
      <figure className={`image ${classNames.image}`}>
        <img src={schedule} alt='Calendar' />
      </figure>
      <AddEventButton className={classNames.addEventBtn} />
    </Column>
  );
}
