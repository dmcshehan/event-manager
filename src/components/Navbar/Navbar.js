import React from "react";
import { Link } from "react-router-dom";
import classNames from "./Navbar.module.css";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import Navbar from "react-bulma-components/lib/components/navbar";

const { Brand, Burger, Menu, Container, Item } = Navbar;

export default function NavbarComp({ toggleDropdown, isDropdownOpen }) {
  const userState = useSelector((state) => state.user);
  const { user } = userState;

  return (
    <Navbar className='navbar' role='navigation' aria-label='main navigation'>
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
              <Item>
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
              </Item>
            ) : (
              <Link to='/signin' className='button is-primary'>
                Login
              </Link>
            )}
          </div>
        </Container>
      </Menu>
    </Navbar>
  );
}
