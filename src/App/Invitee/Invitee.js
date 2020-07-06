import React from "react";
import List from "react-bulma-components/lib/components/list";

import classNames from "./Invitee.module.css";

const { Item } = List;

export default function Invitee({ name }) {
  return <Item>{name}</Item>;
}
