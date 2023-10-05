import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import facebook from "../../assets/images/Facebook.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Twitter from "../../assets/images/Twitter.svg";
import qZone1 from "../../assets/images/qZone1.png";
import qZone2 from "../../assets/images/qZone2.png";
import qZone3 from "../../assets/images/qZone3.png";
import bg1 from "../../assets/images/bg1.png";

const MainRight = () => {
  return (
    <div className="p-2">
      <div className="w-full">
        <h1 className="text-xl mb-2 font-semibold">Login With</h1>
        <button className="btn btn-outline mb-1 capitalize text-[#0d6efd] w-full hover:bg-[#0d6efd]">
          <FaGoogle />
          Login With Google
        </button>

        <button className="btn btn-outline capitalize text-[#6c757d] w-full hover:bg-[#6c757d]">
          <FaGithub />
          Login With Githun
        </button>
      </div>

      <div className="mt-10">
        <h1 className="text-xl mb-2 font-semibold">Find Us On</h1>
        <div className="flex w-full border-2 p-2 gap-2 rounded-t-xl items-center">
          <img src={facebook} alt="" />
          <div>
            <p className="text-[#706F6F]">Facebook</p>
          </div>
        </div>

        <div className="flex w-full border-x-2 p-2 gap-2 items-center">
          <img src={Instagram} alt="" />
          <div>
            <p className="text-[#706F6F]">Instagram</p>
          </div>
        </div>

        <div className="flex w-full border-2 p-2 gap-2 rounded-b-xl items-center">
          <img src={Twitter} alt="" />
          <div>
            <p className="text-[#706F6F]">Twitter</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] mt-10 py-7 px-4">
        <h1 className="text-xl mb-2 font-semibold">Q-Zone</h1>
        <div className="flex flex-col justify-center">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>

      <div className="mt-10">
        <div
          className="hero "
          style={{
            backgroundImage: `url(${bg1})`,
          }}
        >
          <div className="hero-overlay  bg-opacity-60"></div>
          <div className="hero-content  text-center text-neutral-content">
            <div className="max-w-md ">
              <h1 className="mb-5 text-2xl font-bold">
                Create an Amazing Newspaper
              </h1>
              <p className="mb-5">
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className="btn bg-[#D72050] border-none capitalize rounded-none text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
