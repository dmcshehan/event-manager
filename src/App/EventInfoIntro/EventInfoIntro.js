import React from "react";

import Card from "react-bulma-components/lib/components/card";
import Columns from "react-bulma-components/lib/components/columns";

import calendar from "../../assets/images/calendar_pick.svg";
import classNames from "./EventInfoIntro.module.css";

const { Column } = Columns;
const { Content } = Card;

export default function EventInfo() {
  return (
    <Column>
      <Card className={classNames.eventInfoIntro}>
        <Content>
          <h2 className={`title is-4 has-text-centered ${classNames.title}`}>
            Select an Event from your list!
          </h2>
          <figure className={`image ${classNames.image}`}>
            <img src={calendar} />
          </figure>
        </Content>
      </Card>
    </Column>
  );
}
