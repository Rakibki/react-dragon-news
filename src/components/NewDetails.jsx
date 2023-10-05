import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../shared/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MainRight from "../pages/home/MainRight";

const NewDetails = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    const result = items.find((response) => response._id == id);
    setItem(result);
  }, [id, items]);

  return (
    item && (
      <div>
        <Header />
        <div className="grid gap-3 grid-cols-4">
          <div className="mt-8 col-span-3 mb-4">
            <img src={item.image_url} alt="" />
            <h1 className="text-2xl mb-4 mt-2 font-semibold">{item.title}</h1>
            <p>{item.details}</p>
            <button className="btn text-white rounded-none mt-4 bg-[#D72050]">
              <AiOutlineArrowLeft />
              All news in this category
            </button>
          </div>
          <MainRight />
        </div>
      </div>
    )
  );
};

export default NewDetails;
