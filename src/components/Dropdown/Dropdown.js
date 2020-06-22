import React from "react";
import firebase from "../../auth/firebase";
import classNames from "./Dropdown.module.css";
import { useSelector, useDispatch } from "react-redux";

//actioncreators
import { userLogoutSuccess } from "../../store/actionCreators/user";

export default function Dropdown({ toggleDropdown }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { user } = userState;

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        toggleDropdown(false);
        dispatch(userLogoutSuccess());
      })
      .catch(function (error) {
        // An error happened.
      });
  }

  return (
    <div className={`${classNames.dropDown} box`}>
      <figure className={`image ${classNames.avaratFigure}`}>
        <img className='is-rounded' src={user.photoURL} alt='User Avatar' />
      </figure>
      <p className={`${classNames.displayName} has-text-centered`}>
        {user.displayName}
      </p>
      <p className={`${classNames.email} has-text-centered`}>{user.email}</p>
      <hr className='navbar-divider'></hr>
      <div className={classNames.item}>
        <button className={`${classNames.signOutBtn} button`} onClick={logout}>
          Sign out
        </button>
      </div>
    </div>
  );
}
