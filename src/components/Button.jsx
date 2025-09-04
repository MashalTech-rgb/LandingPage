import React from "react";
import "../Styles/Global.css";

const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={`btn btn-${variant}`} >
      {children}
    </button>
  );
};

export default Button;
