"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";

const Cards = () => {
  const [data] = useState([
    {
      id: 1,
      heading: "traders",
      text: "Swap tokens with minimal slippage and pay some of the lowest fees to AERO lockers.",
    },
    {
      id: 2,
      heading: "Liquidity Providers",
      text: "Deposit the tokens used for trading on Aerodrome and receive AERO emissions as rewards.",
    },
    {
      id: 3,
      heading: "Liquidity Providers",
      text: "Deposit the tokens used for trading on Aerodrome and receive AERO emissions as rewards.",
    },
  ]);
  return (
    <div className="relative text-white">
      <div className="absolute left-0 top-0 w-full xl:w-[1170px] h-[645px] -z-[999]">
        <Image
          src="/images/line.png"
          fill
          className="w-full h-full object-contain"
          alt="line"
        />
      </div>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-[173px]">
          {data?.map((item) => (
            <div key={item.id} className="bg-[#132542] rounded-[16px] p-9">
              <span className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#113253] mx-auto">
                <span className="w-[80px] h-[80px] rounded-full bg-[#02ABEA] flex items-center justify-center">
                  <FaArrowsRotate size={20} />
                </span>
              </span>
              <h2 className="mt-5 text-center text-[24px] text-white font-semibold">
                {item.heading}
              </h2>
              <p className="mt-4 text-base text-white text-center">
                {item.text}
              </p>
              <div className="mt-10">
                <Image
                  src="/images/arrow.png"
                  width={103}
                  height={12}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Cards;
