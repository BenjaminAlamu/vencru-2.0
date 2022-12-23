import React from "react";
import "./index.scss";

const Button = (props) => {
  const { image, text } = props;
  return (
    <main className="button">
      <button className="flex border-2 rounded-lg p-2 text-gray-700 text-sm">
        {image ? (
          <img
            className="mx-2"
            src={require(`../../assets/img/${image}.svg`)}
          ></img>
        ) : (
          ""
        )}
        {text}
      </button>
    </main>
  );
};
export default Button;
