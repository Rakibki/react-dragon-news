import React, { useState } from "react";
import Frame1 from "../assets/images/Frame1.svg";
import Frame2 from "../assets/images/Frame2.svg";
import { AiFillEye, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const New = ({ item }) => {
  return (
    <div className="p-10">
      <div className="flex p-3 justify-between bg-[#F3F3F3]">
        <div className="flex gap-3">
          <img className="w-[50px] rounded-full" src={item.author.img} alt="" />
          <div>
            <h2 className="text-lg font-semibold">{item.author.name}</h2>
            <p>{item.author.published_date}</p>
          </div>
        </div>
        <div className="flex">
          <img src={Frame1} alt="" />
          <img src={Frame2} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl my-4 font-semibold">{item.title}</h1>
        <img src={item.image_url} alt="" />
        <div className="">

          {
            item.details.length > 250 ?
            <p className="my-4 text-[#706F6F]">{item.details.slice(0, 250)}<Link className="ml-2 text-[#ffb23f]" to={`/news/${item._id}`}>Read More</Link></p> 
            : <p>{item.details}</p>
          }

        </div>
      </div>
      <hr />
      <div className="flex p-3 justify-between">
        <div className="flex gap-1 items-center">
          <AiFillStar className="text-2xl text-[#ffb23f]" />
          <AiFillStar className="text-2xl text-[#ffb23f]" />
          <AiFillStar className="text-2xl text-[#ffb23f]" />
          <AiFillStar className="text-2xl text-[#ffb23f]" />
          <AiFillStar className="text-2xl mr-3 text-[#ffb23f]" />
          <p className="text-xl font-semibold text-[#706F6F]">
            {item.rating.number}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <AiFillEye className="text-2xl text-[#706F6F]" />
          <p className="text-[#706F6F] font-semibold">{item.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default New;
