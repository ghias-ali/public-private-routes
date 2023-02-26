import React from "react";
import { updateLoginState } from "./store/profile";
import { useDispatch } from "react-redux";

function Public() {
  const dispatch = useDispatch();

  return (
    <div>
      Public
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(updateLoginState(true))}>Login</button>
    </div>
  );
}

export default Public;
