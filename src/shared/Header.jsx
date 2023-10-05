import React from "react";
import logo from "../assets/images/logo.png";
import moment from 'moment';
import { useContext } from "react";
import { authContext } from "../providers/authProvider";

const Header = () => {
  const {user} = useContext(authContext)
  return (
    <div className="flex mt-7 justify-center">
      <div>
        <img className="w-[300px] md:w-[450px] mb-4" src={logo} alt="" />
        <p className="text-center text-sm mb-1 text-[#706F6F]">Journalism Without Fear or Favour</p>
        <p className="text-center text-[#403F3F]">{moment().format('LLLL')}</p>
      </div>
    </div>
  );
};

export default Header;
