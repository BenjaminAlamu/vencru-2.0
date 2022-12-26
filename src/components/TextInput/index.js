import React from "react";
import "./index.scss";

const TextInput = (props) => {
  const { type, placeholder } = props;
  const inputType = type || "search";
  let activeStyle;

  if (inputType == "search") {
    activeStyle = "search__box";
  } else if (inputType == "email") {
    activeStyle = "email__box";
  }

  return (
    <main className="text__input">
      <input
        type="text"
        placeholder={placeholder}
        className={`text-md ${activeStyle}`}
      />
    </main>
  );
};
export default TextInput;
