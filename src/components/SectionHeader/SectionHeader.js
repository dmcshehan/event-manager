import React from "react";
import classNames from "./SectionHeader.module.css";

export default function SectionHeader({ children }) {
  return <div className={classNames.sectionHeader}>{children}</div>;
}
