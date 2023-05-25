import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "./Wrapper";

const NavBar = () => {
  return (
    <div className="sticky bg-transparent top-0">
      <Wrapper>
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-helvetica text-xl font-bold text-white">DW</p>
          </div>
          <div className="flex gap-6 items-center">
            <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NavBar;
