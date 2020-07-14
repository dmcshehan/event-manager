import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classNames from "./Notifications.module.css";

import { clearAllNotifications } from "../../store/actionCreators/notification";

export default function Notification() {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.notification);

  useEffect(() => {
    const closeTimeout = setTimeout(() => {
      dispatch(clearAllNotifications());
    }, 5000);

    return () => {
      clearTimeout(closeTimeout);
    };
  });

  function clearNotifications() {
    dispatch(clearAllNotifications());
  }

  return success || error ? (
    <div
      className={`notification ${classNames.notifiation} ${
        success ? "is-success" : error ? "is-danger" : ""
      }`}
    >
      <button className='delete' onClick={clearNotifications}></button>
      {success || error}
    </div>
  ) : null;
}
