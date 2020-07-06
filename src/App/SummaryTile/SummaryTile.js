import React from "react";
import Card from "react-bulma-components/lib/components/card";

import classNames from "./SummaryTile.module.scss";

export default function SummaryTile({ title, value }) {
  return (
    <Card className={classNames.summaryTile}>
      <h3 className='title is-5 has-text-centered'>
        {title} : {value}
      </h3>
    </Card>
  );
}
