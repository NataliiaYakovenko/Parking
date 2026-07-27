import React, { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

const HomePage = () => {
  const [state, setState] = useState(false);

  const buttonHandler = () => {
    setState((state) => !state);
  };

  const textButton = state ? "SignUp" : "SignIn";

  return (
    <>
      <header>
        <button onClick={buttonHandler}>{textButton}</button>
      </header>

      <main>{state ? <SignIn /> : <SignUp />}</main>
    </>
  );
};

export default HomePage;
