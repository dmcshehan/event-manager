import React, { useEffect, useState } from "react";
import firebase from "../auth/firebase";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classNames from "./App.module.css";

//components
import Header from "./Header/Header";
import NavBar from "./Navbar/Navbar";
import DropDown from "./Dropdown/Dropdown";
import Signin from "./Signin/Signin";
import Dashboard from "./Dashboard/Dashboard";
import EventModal from "./EventModal/EventModal";

//Actioncreators
import { userLoginSuccess } from "../store/actionCreators/user";

export default function App() {
  const [isDropdownOpen, setDropdownState] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);

  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const isLoggedIn = user ? true : false;

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch(userLoginSuccess(user));
      }
    });
  });

  function toggleDropdown(e) {
    setDropdownState(!isDropdownOpen);
  }

  function closeDropDown() {
    setDropdownState(false);
  }

  function openModal() {
    setModelOpen(true);
  }
  function closeModal() {
    setModelOpen(false);
  }

  return (
    <Router>
      <div className={classNames.app}>
        <EventModal onModalClose={closeModal} show={isModelOpen} />

        <NavBar
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />
        {isDropdownOpen ? <DropDown closeDropDown={closeDropDown} /> : null}
        {!isLoggedIn ? <Header /> : null}
        <Switch>
          <Route
            exact
            path='/dashboard'
            render={() => {
              return <Dashboard onAddEventBtnClick={openModal} />;
            }}
          ></Route>
          <Route exact path='/signin' component={Signin}></Route>
        </Switch>
      </div>
    </Router>
  );
}
