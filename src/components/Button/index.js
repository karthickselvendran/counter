import React from "react";
import "./button.css";

const Button = (props) => {
  const { name = "", onClick = {} } = props;
  return (
    <div>
      <button onClick={(e) => onClick(e)} {...props}>
        {name || "Submit"}
      </button>
    </div>
  );
};
export default Button;
