import React, { useEffect, useState } from "react";
import firebase from "../../auth/firebase";
import { useSelector, useDispatch } from "react-redux";
//import { createSelector } from "reselect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classNames from "./App.module.css";

//components
import Header from "../Header/Header";
import NavBar from "../Navbar/Navbar";
import DropDown from "../Dropdown/Dropdown";
import Signin from "../Signin/Signin";
import Dashboard from "../Dashboard/Dashboard";

//Actioncreators
import { userLoginSuccess } from "../../store/actionCreators/user";

export default function App() {
  const [isDropdownOpen, setDropdownState] = useState(false);
  const userState = useSelector((state) => state.user);
  const { user } = userState;

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch(userLoginSuccess(user));
      }
    });
  });

  function toggleDropdown(e) {
    console.log(e);
    setDropdownState(!isDropdownOpen);
  }

  function closeDropDown() {
    setDropdownState(false);
  }

  return (
    <Router>
      <div className={classNames.app}>
        <NavBar
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />
        {isDropdownOpen ? <DropDown closeDropDown={closeDropDown} /> : null}
        <Header />
        <Switch>
          <Route exact path='/signin' component={Signin}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}
