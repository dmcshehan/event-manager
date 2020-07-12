import React, { useEffect } from "react";
import firebase from "../auth/firebase";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classNames from "./App.module.css";

//hooks
import useIsLoggedIn from "../hooks/useIsLoggedIn";

//components
import Home from "./Home/Home";
import Header from "./Header/Header";
import NavBar from "./Navbar/Navbar";
import DropDown from "./Dropdown/Dropdown";
import Signin from "./Signin/Signin";
import Dashboard from "./Dashboard/Dashboard";
import EventModal from "./EventModal/EventModal";
import InviteeModal from "./InviteeModal/InviteeModal";
import EventIntro from "./EventIntro/EventIntro";

//Actioncreators
import { userLoginSuccess } from "../store/actionCreators/user";
import { fetchEvents } from "../store/actionCreators/event";

export default function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (loggedInUser) {
      if (loggedInUser) {
        dispatch(userLoginSuccess(loggedInUser));
        const unsubscribe = dispatch(fetchEvents());

        return () => {
          unsubscribe();
        };
      }
    });
  });

  return (
    <React.StrictMode>
      <Router>
        <div className={classNames.app}>
          <NavBar />
          <EventModal />
          <InviteeModal />
          <DropDown />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/intro' component={EventIntro} />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
}
