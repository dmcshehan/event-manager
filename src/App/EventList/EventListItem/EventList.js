import React from "react";
import Menu from "react-bulma-components/lib/components/menu";

const { List } = Menu;
const { Item } = List;

export default function EventListItem({ title }) {
  return <Item>{title}</Item>;
}
