import React from "react";
import "./Button.css";

const Button = (props) => {
  return React.createElement(
    "button",
    { onClick: props.callApi },
    "Click to generate a joke."
  );
};

export default Button;
