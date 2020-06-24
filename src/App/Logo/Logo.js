import React from "react";
import classNames from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classNames.logo}>
      <h1 className={classNames.logoTitle}>Event Manager</h1>
    </div>
  );
}
