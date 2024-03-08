"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Intro = () => {
  return (
    <Wrapper>
      <div className="flex flex-wrap items-center gap-10">
        <div className="w-full lg:w-5/12">
          <div className="bg-gradient-to-b from-[#066C9C] via-[#01ADED] to-[#010319] rounded-[20px] overflow-hidden relative p-[1px]">
            <div className="bg-gradient-to-b from-[#132542] to-[#010319] rounded-[20px] p-4">
              <div className="relative w-[250px] md:w-[363px] h-[250px] md:h-[412px] mx-auto">
                <Image
                  src="/images/electron.png"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2
            style={{
              backgroundImage:
                "linear-gradient(to right, #066C9C 0%, #066C9C 10%, #00E1D2 50%)",
            }}
            className=" bg-clip-text text-[26px] font-medium text-transparent inline-block relative"
          >
            INTRODUCING lIQUI FLX
            <span className="absolute -bottom-1 left-0 w-full h-[.5px] bg-gray-800"></span>
            <span className="absolute -bottom-1 left-0 w-10 h-[.5px] bg-[#01ADED]"></span>
          </h2>
          <h1 className="text-white text-[30px] md:text-[48px] leading-[43px] md:leading-[55px] mt-4 font-medium w-full xl:w-[80%]">
            Spot and Leverage Trading
          </h1>
          <p className="text-white text-lg mt-4">
            Lorem ipsum dolor sit amet, consecteadipis Pellentesque arcu turpis,
            dapibus a eni temporMaecenas suscit ultrices tortor, eu eleifend
            eros rhoncusNulla a dapibus ex. Nullam eu tellus vel dolor finibus
            facilisis a augue.
          </p>
          <Link
            href="/"
            className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-[40px] py-3 px-8 capitalize text-lg text-white mt-6 inline-block"
          >
            trade now
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
