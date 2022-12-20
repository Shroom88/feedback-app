import React from "react";
import spinner from "../assets/loader.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "500px",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Spinner;
