import React, { useEffect } from "react";
import firebase from "../auth/firebase";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classNames from "./App.module.css";

//hooks
import useIsLoggedIn from "../hooks/useIsLoggedIn";

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

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (loggedInUser) {
      if (!isLoggedIn && loggedInUser) {
        dispatch(userLoginSuccess(loggedInUser));
      }
    });
  });

  return (
    <React.StrictMode>
      <Router>
        <div className={classNames.app}>
          <NavBar />
          {!isLoggedIn ? <Header /> : null}
          <EventModal />
          <DropDown />

          <Switch>
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
}
