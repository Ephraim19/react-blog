import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom"

function Home({ setIsAuth }) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Tech Love!</h1>
        <p className="lead">
          We make all kinds of awesome blogs on technology.
        </p>
        <hr className="my-4" />
        <p>Click the button below to check out our awesome blog.</p>
        <Link className="btn btn-primary btn-lg" to="/blog" role="button">
          Check out our Blog
        </Link>
      </div>
    </div>
  );
}

export default Home;
