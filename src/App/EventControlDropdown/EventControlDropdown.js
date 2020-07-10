import React from "react";
import Card from "react-bulma-components/lib/components/card";

import classNames from "./EventControlDropdown.module.scss";

export default function EventControlDropdown() {
  return (
    <div>
      <div className='dropdown is-active is-right'>
        <div className='dropdown-trigger'>
          <button
            className='button'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
          >
            <span>Dropdown button</span>
            <span className='icon is-small'>
              <i className='fas fa-angle-down' aria-hidden='true'></i>
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <a href='#' className='dropdown-item'>
              Dropdown item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
