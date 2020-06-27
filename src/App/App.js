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
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownState] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);

  const { user } = useSelector((state) => state.user);
  const isLoggedIn = user ? true : false;

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
        <NavBar toggleDropdown={toggleDropdown} isOpen={isDropdownOpen} />
        {!isLoggedIn ? <Header /> : null}
        <EventModal onModalClose={closeModal} show={isModelOpen} />
        {isDropdownOpen ? <DropDown closeDropDown={closeDropDown} /> : null}

        <Switch>
          <Route exact path='/signin' component={Signin}></Route>
          <Route
            exact
            path='/dashboard'
            render={() => {
              return <Dashboard onAddEventBtnClick={openModal} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}
