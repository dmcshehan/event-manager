import React from "react";
import FeatureBox from "../FeatureBox/FeatureBox";

import features from "./features";

export default function AppFeatures({ ...props }) {
  const featureBoxes = features.map((feature) => (
    <div key={feature.id} className='column is-one-third'>
      <FeatureBox {...feature} />
    </div>
  ));

  return (
    <div {...props}>
      <div class='columns is-multiline'>{featureBoxes}</div>
    </div>
  );
}
