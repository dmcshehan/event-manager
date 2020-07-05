import React from "react";
import Box from "react-bulma-components/lib/components/box";

export default function SummaryTile({ title, value }) {
  return (
    <Box>
      <h3 className='title is-5 has-text-centered'>
        {title} : {value}
      </h3>
    </Box>
  );
}
