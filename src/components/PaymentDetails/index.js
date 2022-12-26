import React from "react";
import "./index.scss";
import RadioButton from "../RadioButton";
import CheckMark from "../../assets/img/checkmark.svg";

const PaymentDetails = (props) => {
  const { card } = props;
  return (
    <main
      className={`payment__details flex items-start justify-between px-2 py-3 mb-4 border shadow-md rounded-md cursor-pointer ${
        card.isActive ? "bg-primary-50 border-primary-300" : ""
      }`}
    >
      <main className="flex items-start font-medium text-sm text-gray-700">
        <img
          className="mx-2"
          src={require(`../../assets/img/${card.image}.svg`)}
        ></img>
        <main>
          <p
            className={`text-gray-700 font-medium ${
              card.isActive ? "text-primary-800" : ""
            }`}
          >
            {card.name} ending in {card.number}
          </p>
          <p
            className={`text-gray-500 mb-3 ${
              card.isActive ? "text-primary-600" : ""
            }`}
          >
            Expiry {card.expiry}
          </p>
          <p className="text-sm">
            <span
              className={`text-gray-500  ${
                card.isActive ? "text-primary-500" : ""
              }`}
            >
              Set As Default
            </span>
            <span className="text-primary-700 font-medium ml-4">Edit</span>
          </p>
        </main>
      </main>
      {card.isActive ? (
        <img className="mx-2" src={CheckMark}></img>
      ) : (
        <RadioButton />
      )}
    </main>
  );
};
export default PaymentDetails;
