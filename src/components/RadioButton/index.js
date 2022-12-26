import React from "react";
import "./index.scss";

const RadioButton = (props) => {
  const { label, id } = props;
  return (
    <div className="radio__item">
      <input type="radio" id={id} name={id} value={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default RadioButton;
