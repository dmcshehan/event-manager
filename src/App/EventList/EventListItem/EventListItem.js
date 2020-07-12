import React from "react";

import EventControlDropdown from "../../EventControlDropdown/EventControlDropdown";

import { useDispatch } from "react-redux";

//actionCreators
import { selectEvent } from "../../../store/actionCreators/eventInfo.js";

import classNames from "./EventListItem.module.css";

export default function EventListItem({ title, _id }) {
  const dispatch = useDispatch();

  function selectThisEvent() {
    dispatch(selectEvent(_id));
  }
  return (
    <div className={classNames.eventListItem} onClick={selectThisEvent}>
      {title}
      <EventControlDropdown _id={_id} />
    </div>
  );
}

//onClick={selectThisEvent}
