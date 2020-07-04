import React from "react";
import Menu from "react-bulma-components/lib/components/menu";

import classNames from "./EventListItem.module.css";

const { List } = Menu;
const { Item } = List;

export default function EventListItem({ title, _id }) {
  return (
    <Item
      className={classNames.eventListItem}
      onClick={() => {
        console.log(_id);
      }}
    >
      {title}
    </Item>
  );
}
