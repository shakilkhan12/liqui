"use client";

import Image from "next/image";
import { useState } from "react";

const Companies = () => {
  const [images] = useState([
    { id: 1, image: "/images/1.png" },
    { id: 2, image: "/images/2.png" },
    { id: 3, image: "/images/3.png" },
    { id: 4, image: "/images/4.png" },
    { id: 5, image: "/images/5.png" },
    { id: 6, image: "/images/6.png" },
    { id: 7, image: "/images/7.png" },
  ]);
  return (
    <div className="pt-14">
      <div className="border-t border-b border-gray-800  relative">
        <span className="absolute left-60 w-5 h-[1px] bg-[#01ADED]"></span>
        <span className="absolute right-0 w-5 h-[1px] bg-white"></span>
        <span className="absolute bottom-0 left-10 w-5 h-[1px] bg-white"></span>
        <span className="absolute right-60 bottom-0 w-5 h-[1px] bg-[#01ADED]"></span>
        <div className="max-w-[1240px] w-full px-5 mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 items-center">
            {images?.map((img) => (
              <Image
                src={img.image}
                width={100}
                height={100}
                alt={"company logo"}
                key={img.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
