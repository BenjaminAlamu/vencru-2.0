import React, { useState } from "react";
import SideMenuContentWrapper from "../SideMenuContentWrapper";
import "./index.scss";
import Logo from "../../assets/img/Logo.svg";
import MobileToggle from "../../assets/img/mobile-toggle.svg";

const SideMenu = (props) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <main className="sidemenu bg-white  ">
      <main className="flex justify-between items-center ">
        <img className="m-3 ml-6 mb-6" src={Logo}></img>
        <img
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="block lg:hidden"
          src={MobileToggle}
        ></img>
      </main>
      <main className=" mobile_nav lg:hidden">
        {showNav ? <SideMenuContentWrapper /> : null}
      </main>

      <main className="hidden lg:block">
        <SideMenuContentWrapper />
      </main>
    </main>
  );
};
export default SideMenu;
