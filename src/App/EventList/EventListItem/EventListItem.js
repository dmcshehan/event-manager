import React from "react";
import Menu from "react-bulma-components/lib/components/menu";
import { useDispatch } from "react-redux";

//actionCreators
import { selectEvent } from "../../../store/actionCreators/eventInfo.js";

import classNames from "./EventListItem.module.css";

const { List } = Menu;
const { Item } = List;

export default function EventListItem({ title, _id }) {
  const dispatch = useDispatch();

  function selectThisEvent() {
    dispatch(selectEvent(_id));
  }
  return (
    <Item className={classNames.eventListItem} onClick={selectThisEvent}>
      {title}
    </Item>
  );
}
