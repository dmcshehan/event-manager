import React, { useEffect } from "react";
import firebase from "../../auth/firebase";
import { useSelector, useDispatch } from "react-redux";
//import { createSelector } from "reselect";
import { BrowserRouter as Router } from "react-router-dom";

import classNames from "./App.module.css";

//components
import Header from "../Header/Header";
// import Filter from "../Filter/Filter";
// import Counter from "../Counter/Counter";
// import Invitees from "../Invitees/Invitees";
// import SearchForm from "../SearchForm/SearchForm.js";
// import Signup from "../Signup/Signup";
import NavBar from "../Navbar/Navbar";

//Actioncreators
import { userLoginSuccess } from "../../store/actionCreators/user";

export default function App() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch(userLoginSuccess(user));
      }
    });
  });

  return (
    <Router>
      <div className={classNames.app}>
        <NavBar />
        <Header />
      </div>
    </Router>
  );
}
