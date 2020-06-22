import React from "react";
//import SearchForm from "../SearchForm/SearchForm";
import classNames from "./Header.module.css";

function Header(props) {
  return (
    <header className={classNames.header}>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered has-text-white'>
              Plan Your Events
            </h1>
            <h2 className='subtitle has-text-centered has-text-white'>
              With Easy To Use UI
            </h2>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
