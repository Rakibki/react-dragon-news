import React from "react";
import Navber from "../../shared/Navber";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navber />
      <div className='w-full h-screen'>
        <div>
          <h1>Oops !!! Page Not Found</h1>
          <Link to={"/"}>
            <button className="btn">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
