import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Menu from "react-bulma-components/lib/components/menu";
import EventListItem from "./EventListItem/EventListItem";

const { List } = Menu;

export default function ListItems() {
  const { events } = useSelector((state) => state.event);

  const eventItems = events
    ? events.map((element) => {
        return <EventListItem key={element._id} {...element} />;
      })
    : null;

  return (
    <Menu>
      <List>{eventItems}</List>
    </Menu>
  );
}
