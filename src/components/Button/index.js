import React from "react";
import "./button.css";

const Button = (props) => {
  const { name = "Submit", onClick = () => {} } = props;
  return (
    <div>
      <button onClick={(e) => onClick(e)} {...props}>
        {name}
      </button>
    </div>
  );
};
export default Button;
