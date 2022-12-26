import React from "react";
import SideMenuItem from "../SideMenuItem";
import TextInput from "../TextInput";
import "./index.scss";
import Logo from "../../assets/img/Logo.svg";
import Lady from "../../assets/img/lady.svg";
import Avatar from "../../assets/img/Avatar.svg";
import Logout from "../../assets/img/logout.svg";

const menu = [
  { text: "Home", image: "home", count: null, isActive: false },
  { text: "Dashboard", image: "dashboard", count: "10", isActive: false },
  { text: "Projects", image: "projects", count: null, isActive: false },
  { text: "Tasks", image: "tasks", count: null, isActive: false },
  { text: "Reporting", image: "reporting", count: null, isActive: false },
  { text: "Users", image: "users", count: null, isActive: false },
];

const menu2 = [
  { text: "Support", image: "support", count: null, isActive: false },
  { text: "Settings", image: "settings", count: null, isActive: true },
];

const SideMenuContentWrapper = (props) => {
  return (
    <main className="sidemenu_content bg-white">
      <TextInput type="search" placeholder="Search" className="my-2" />
      <main className="pl-4 mt-6">
        {menu.map((item, index) => (
          <SideMenuItem key={index} item={item} />
        ))}
      </main>

      <main className="pl-4 my-6">
        {menu2.map((item, index) => (
          <SideMenuItem key={index} item={item} />
        ))}
      </main>

      <main className="ml-4 p-2 my-6 text-left text-sm text-gray-700 bg-gray-50">
        <p className=" font-medium my-1">New Features Available</p>
        <p>Check out the new dashboard view. Pages now load faster. </p>
        <img className="mx-2 rounded-lg my-3" src={Lady}></img>
        <p>
          <span>Dismiss</span>{" "}
          <span className="text-primary-700">What's new?</span>
        </p>
      </main>
      <hr className="ml-4" />

      <main className="ml-4 p-2 flex text-sm justify-between items-center text-gray-700">
        <img className="mx-2  my-3" src={Avatar}></img>
        <main className="text-left">
          <p className="font-medium">Olivia Rhye</p>
          <p>olivia@untitledui.com</p>
        </main>
        <img className="mx-2 rounded-lg my-3" src={Logout}></img>
      </main>
    </main>
  );
};
export default SideMenuContentWrapper;
