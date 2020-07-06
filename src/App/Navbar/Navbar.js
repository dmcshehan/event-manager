import React from "react";
import { Link } from "react-router-dom";
import classNames from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../Logo/Logo";
import Navbar from "react-bulma-components/lib/components/navbar";
import GridContainer from "react-bulma-components/lib/components/container";

import {
  openDropdown,
  closeDropdown,
} from "../../store/actionCreators/dropdown";

const { Brand, Burger, Menu, Container } = Navbar;

export default function NavbarComp() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isDropdownOpen } = useSelector((state) => state.dropDown);

  function toggleDropdown() {
    if (isDropdownOpen) {
      return dispatch(closeDropdown());
    }
    dispatch(openDropdown());
  }

  return (
    <GridContainer fluid className={classNames.navbarContainer}>
      <Navbar>
        <Brand>
          <Link className='navbar-item' to='/'>
            <Logo />
          </Link>
          <Burger />
        </Brand>

        <Menu>
          <Container position='end'>
            {user ? (
              <>
                <div className='navbar-item'>
                  <Link to='/dashboard'>Dashboard</Link>
                </div>
                <div className='navbar-item'>
                  <figure className='image is-48x48'>
                    <div
                      onClick={toggleDropdown}
                      className={`${classNames.imgBtn} ${
                        isDropdownOpen ? classNames.border : ""
                      }`}
                      style={{
                        backgroundImage: `url(${user.photoURL})`,
                      }}
                    ></div>
                  </figure>
                </div>
              </>
            ) : (
              <Link to='/signin' className='button is-primary'>
                Login
              </Link>
            )}
          </Container>
        </Menu>
      </Navbar>
    </GridContainer>
  );
}
