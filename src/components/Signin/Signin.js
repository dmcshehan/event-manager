import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../../auth/firebase";
import { Redirect } from "react-router-dom";
import googleProvider from "../../auth/providers/google";

import classNames from "./Signin.module.css";

export default function Signup() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  console.log(user);

  function handleSignup() {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        console.log("result", result);
      })
      .catch(function (error) {
        // Handle Errors here.
      });
  }

  return (
    <>
      {user ? (
        <Redirect to='/dashboard' />
      ) : (
        <div className={classNames.signin}>
          <button
            className={`button ${classNames.googleBtn} has-text-white`}
            onClick={handleSignup}
          >
            <span className='icon'>
              <i className='fab fa-google'></i>
            </span>
            <span>Sign In With Google</span>
          </button>
        </div>
      )}
    </>
  );
}
