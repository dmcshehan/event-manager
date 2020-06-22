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
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
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
