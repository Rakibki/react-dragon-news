import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/images/user.png"
import { authContext } from "../providers/authProvider";
import swal from "sweetalert";

const Navber = () => {
  const {user, logOurUser} = useContext(authContext)
  
    const navItems = <div className="flex text-[#706F6F] gap-3">
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-[#D72050]" : ""
  } to="/"><li>Home</li></NavLink>
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-[#D72050]" : ""
  } to="/about"><li>About</li></NavLink>
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-[#D72050]" : ""
  } to={'/career'}><li>Career</li></NavLink>

        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-[#D72050]" : ""
  } to={'/register'}><li>Register</li></NavLink>
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-[#D72050]" : ""
  } to={'/login'}><li>Login</li></NavLink>
    </div>
    
    const handleLogOut = () => {
      logOurUser()
      .then(() => {
        console.log("log out")
        swal("Good job!", "Log out successful", "success");
      })
      .catch((e) => console.log(e.message))
    }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
            <div className=""><img className="w-[40px] rounded-full" src={user?.photoURL ? user?.photoURL : userImg} alt="" /></div>
            {
              user ? <button onClick={handleLogOut} className="btn rounded-none  px-7 bg-[#403F3F] text-white">Log out</button> : <Link to={"/login"}><button className="btn rounded-none  px-7 bg-[#403F3F] text-white" >Login</button></Link>
            }
        </div>
      </div>
    </div>
  );
};

export default Navber;
