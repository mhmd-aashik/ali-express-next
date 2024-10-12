import React from "react";
import Logo from "./Logo";
import AllAds from "./AllAds";
import Languages from "./Languages";
import NavLinks from "./NavLinks";
import PostAd from "./PostAd";

const Header = () => {
  return (
    <div className="bg-[#149676]">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between px-5 py-3">
        <div className="flex items-end gap-10">
          <Logo />
          <div className="flex items-center gap-5">
            <AllAds />
            <Languages />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <NavLinks />
          <PostAd />
        </div>
      </div>
    </div>
  );
};

export default Header;
