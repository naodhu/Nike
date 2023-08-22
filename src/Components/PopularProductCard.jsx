import React from "react";
import { star } from "../assets/icons";
import "./PopularProductCard.css";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="popular-product-card flex flex-1 flex-col w-full max-sm:w-full">
      <div className="relative">
        <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
        <div className="overlay"></div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <p className="font-semibold font-montserrat text-coral-red text-xl">
          {price}
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
    </div>
  );
};

export default PopularProductCard;
