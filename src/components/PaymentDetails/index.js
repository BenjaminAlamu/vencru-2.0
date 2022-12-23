import React from "react";
import "./index.scss";

const PaymentDetails = (props) => {
  const { card, isActive } = props;
  return (
    <main className={`payment__details flex justify-between`}>
      <main className="flex items-start font-medium text-sm text-gray-700">
        <img
          className="mx-2"
          src={require(`../../assets/img/${card.image}.svg`)}
        ></img>
        <main>
          <p className="">
            {card.type} Ending in {card.number}
          </p>
          <p className="">Expiry {card.expiry}</p>
          <p>Set As Default</p>
        </main>
      </main>
      <p>Checkbox</p>
    </main>
  );
};
export default PaymentDetails;
