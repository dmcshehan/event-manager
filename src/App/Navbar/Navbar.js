import React from "react";
import { Link } from "react-router-dom";
import classNames from "./Navbar.module.css";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import Navbar from "react-bulma-components/lib/components/navbar";
import GridContainer from "react-bulma-components/lib/components/container";

const { Brand, Burger, Menu, Container } = Navbar;

export default function NavbarComp({ toggleDropdown, isOpen }) {
  const userState = useSelector((state) => state.user);
  const { user } = userState;

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
            <div className='navbar-item'>
              {user ? (
                <figure className='image is-48x48'>
                  <div
                    onClick={toggleDropdown}
                    className={`${classNames.imgBtn} ${
                      isOpen ? classNames.border : ""
                    }`}
                    style={{
                      backgroundImage: `url(${user.photoURL})`,
                    }}
                  ></div>
                </figure>
              ) : (
                <Link to='/signin' className='button is-primary'>
                  Login
                </Link>
              )}
            </div>
          </Container>
        </Menu>
      </Navbar>
    </GridContainer>
  );
}
