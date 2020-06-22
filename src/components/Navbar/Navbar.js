import React from "react";
import { Link } from "react-router-dom";
import classNames from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;

  console.log(user);
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          RSVP
        </Link>

        <a
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='mainNav' className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>
            {user ? (
              <figure className='image is-48x48'>
                <div
                  className={classNames.imgBtn}
                  style={{ backgroundImage: `url(${user.photoURL})` }}
                ></div>
              </figure>
            ) : (
              <a className='button is-primary'>Login</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
