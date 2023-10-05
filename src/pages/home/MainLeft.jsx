import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import { AiOutlineCalendar } from "react-icons/ai";

const MainLeft = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="md:xp-6 lg:px-2">
      <div className="bg-[#E7E7E7] p-3">
        <h1 className="text-xl text-[#403F3F] text-center font-semibold">
          National News
        </h1>
      </div>
      <div className="flex mt-8 justify-center">
        <div className="flex flex-col gap-3">
          {categories.map((item) => (
            <NavLink key={item.name}>
              <p className="text-[#9F9F9F]">
                {item.name}
              </p>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center flex-col gap-10">
        <div className="flex justify-center">
          <div className=" w-[270px] overflow-hidden rounded-none card-compact">
            <figure>
              <img src={img1} alt="Shoes" />
            </figure>
            <div>
              <h2 className="text-lg font-semibold text-[#403F3F] mt-2">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h2>
              <p></p>
              <div className="flex mt-1 gap-6">
                <p className="text-[#403F3F]">Sports</p>
                <div className="flex items-center gap-1">
                  <AiOutlineCalendar className="text-[20px]" />
                  <p className="text-[#9F9F9F]">Jan 4, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[270px] rounded-none card-compact">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div>
              <h2 className="text-lg font-semibold text-[#403F3F] mt-2">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h2>
              <p></p>
              <div className="flex mt-1 gap-6">
                <p className="text-[#403F3F]">Sports</p>
                <div className="flex items-center gap-1">
                  <AiOutlineCalendar className="text-[20px]" />
                  <p className="text-[#9F9F9F]">Jan 4, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[270px]  rounded-none card-compact">
            <figure>
              <img src={img3} alt="Shoes" />
            </figure>
            <div>
              <h2 className="text-lg font-semibold text-[#403F3F] mt-2">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h2>
              <p></p>
              <div className="flex mt-1 gap-6">
                <p className="text-[#403F3F]">Sports</p>
                <div className="flex items-center gap-1">
                  <AiOutlineCalendar className="text-[20px]" />
                  <p className="text-[#9F9F9F]">Jan 4, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
