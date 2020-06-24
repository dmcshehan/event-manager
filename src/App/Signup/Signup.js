import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../../auth/firebase";
import googleProvider from "../../auth/providers/google";

export default function Signup() {
  const state = useSelector((state) => state);

  console.log(state);

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

  //   useEffect(() => {
  //     firebase.auth().onAuthStateChanged(function (user) {
  //       if (user) {
  //         console.log("User logged", user);
  //       } else {
  //       }
  //     });
  //   });

  return (
    <div>
      <button onClick={handleSignup}>Signup With Google</button>
    </div>
  );
}
