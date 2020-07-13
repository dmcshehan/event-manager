import React from "react";
import classNames from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${classNames.footer} card-footer`}>
      <p className='card-footer-item'>
        This is an open source project by&nbsp;
        <a href='https://dmcshehan.com'>Shehan Disanayake</a>.
      </p>
    </footer>
  );
}
