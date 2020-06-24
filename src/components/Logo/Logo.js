import React from "react";
import classNames from "./Logo.module.css";
import logo from "../../assets/images/logo.svg";

export default function Logo() {
  return (
    <div className={classNames.logo}>
      <h1 className={classNames.logoTitle}>Event Manager</h1>
    </div>
  );
}
