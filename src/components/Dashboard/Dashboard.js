import React from "react";
import EventMenu from "../EventMenu/EventMenu";
import EventInfo from "../EventInfo/EventInfo";

import classNames from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <section className={classNames.dashboard}>
      <div className='container is-fluid'>
        <div className={`columns`}>
          <EventMenu />
          <EventInfo />
        </div>
      </div>
    </section>
  );
}
