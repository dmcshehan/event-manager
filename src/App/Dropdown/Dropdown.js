import React from "react";

import classNames from "./Dropdown.module.css";
import { useSelector, useDispatch } from "react-redux";

import Box from "react-bulma-components/lib/components/box";
import Button from "react-bulma-components/lib/components/button";
import Image from "react-bulma-components/lib/components/image";

//actioncreators
import { logoutUser } from "../../store/actionCreators/user";

export default function Dropdown() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isDropdownOpen } = useSelector((state) => state.dropDown);

  function logout() {
    dispatch(logoutUser());
  }

  return user ? (
    <Box
      className={`${classNames.dropDown} ${
        isDropdownOpen ? classNames.showDropdown : classNames.hideDropdown
      }`}
    >
      <figure className={`image ${classNames.avaratFigure}`}>
        <Image rounded={true} src={user.photoURL} alt='User Avatar' />
      </figure>
      <p className={`${classNames.displayName} has-text-centered`}>
        {user.displayName}
      </p>
      <p className={`${classNames.email} has-text-centered`}>{user.email}</p>
      <hr className='navbar-divider'></hr>
      <Button className={classNames.signOutBtn} onClick={logout}>
        Sign out
      </Button>
    </Box>
  ) : null;
}
