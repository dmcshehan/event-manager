import React from "react";

import Header from "../Header/Header";
import AppFeatures from "../AppFeatures/AppFeatures";

import classNames from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <AppFeatures className={classNames.features} />
    </div>
  );
}
