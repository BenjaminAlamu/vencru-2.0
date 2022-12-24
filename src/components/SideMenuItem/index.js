import React from "react";
import "./index.scss";

const SideMenuItem = (props) => {
  const { image, text, count, isActive } = props.item;
  return (
    <main
      className={`sidemenu__item py-2 flex justify-between ${
        isActive ? "bg-gray-50 rounded-lg" : ""
      }`}
    >
      <main className="flex items-center font-medium text-sm text-gray-700">
        <img
          className="mx-2 h-4"
          src={require(`../../assets/img/${image}.svg`)}
        ></img>
        <p className="">{text}</p>
      </main>
      {count ? <p className="count">{count}</p> : null}
    </main>
  );
};
export default SideMenuItem;
