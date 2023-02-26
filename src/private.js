import React from "react";
import { updateLoginState } from "./store/profile";
import { useDispatch } from "react-redux";

function Private() {
  const dispatch = useDispatch();
  return (
    <div>
      Private
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => dispatch(updateLoginState(false))}
      >
        Logout
      </button>
    </div>
  );
}

export default Private;
