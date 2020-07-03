import React from "react";
import firebase from "../../auth/firebase";
import classNames from "./Dropdown.module.css";
import { useSelector, useDispatch } from "react-redux";

import Box from "react-bulma-components/lib/components/box";
import Button from "react-bulma-components/lib/components/button";
import Image from "react-bulma-components/lib/components/image";
//actioncreators
import { logoutUser } from "../../store/actionCreators/user";

export default function Dropdown({ closeDropDown }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { user } = userState;

  function logout() {
    closeDropDown();
    dispatch(logoutUser());
  }

  return (
    <Box className={classNames.dropDown}>
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
  );
}
