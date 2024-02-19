/* eslint-disable react/prop-types */
import React from "react";
import img1 from "@/assets/img/brands/1.png";
import img2 from "@/assets/img/brands/2.png";
import img3 from "@/assets/img/brands/3.png";
import img4 from "@/assets/img/brands/4.png";
import img5 from "@/assets/img/brands/5.png";
import img6 from "@/assets/img/brands/6.png";
import img7 from "@/assets/img/brands/7.png";

const brands = [img1, img2, img3, img4, img5, img6, img7];

const doubleBrands = (originalArray) => [
  ...originalArray,
  ...originalArray,
  ...originalArray,
  ...originalArray,
  ...originalArray,
  ...originalArray,
  ...originalArray,
  ...originalArray,
  ...originalArray,
  ...originalArray,
];

const BrandImage = ({ img, index }) => (
  <div className="flex justify-center items-center flex-col h-full w-40">
    <img
      className="h-full w-full object-contain"
      src={img}
      alt={`brand-${index + 1}`}
    />
  </div>
);

export default function MovingBar() {
  const doubledBrands = doubleBrands(brands);

  return (
    <div className="h-40 w-screen border-2 border-[#00000021] overflow-hidden relative">
      <div className="flex animate-moving-bar absolute transition-transform ease-linear infinite gap-10">
        {doubledBrands.map((img, index) => (
          <BrandImage key={index} img={img} index={index} />
        ))}
      </div>
    </div>
  );
}
