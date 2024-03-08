"use client";
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";

import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [links] = useState([
    {
      id: 1,
      heading: "products",
      links: [
        { id: 1, title: "lorem link" },
        { id: 2, title: "lorem link" },
        { id: 3, title: "lorem link" },
      ],
    },
    {
      id: 2,
      heading: "support",
      links: [
        { id: 1, title: "lorem link" },
        { id: 2, title: "lorem link" },
        { id: 3, title: "lorem link" },
      ],
    },
    {
      id: 3,
      heading: "company",
      links: [
        { id: 1, title: "lorem link" },
        { id: 2, title: "lorem link" },
        { id: 3, title: "lorem link" },
      ],
    },
  ]);
  return (
    <footer className="bg-[#061529] pt-12">
      <Wrapper>
        <div className="flex flex-wrap gap-[150px]">
          <div className="w-full lg:w-4/12">
            <div className="flex items-center gap-5">
              <Image src="/images/footer-logo.png" width={65} height={65} />
              <h2
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #066C9C 0%, #066C9C 10%, #00E1D2 50%)",
                }}
                className=" bg-clip-text text-[34px] font-bold text-transparent relative inline-block uppercase"
              >
                liquiflx
              </h2>
            </div>
            <p className="mt-4 text-base text-gray-400">
              Lorem ipsum dolor sit amet, consecteturel Pellentesque arcu
              turpis, apibus enim tem fringilla hendrerit nibh.{" "}
            </p>
            <p className="mt-6 text-white text-base">
              We respect your privacy and never spam.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <Link
                href=""
                className="text-white hover:text-white focus:text-white"
              >
                <LuFacebook size={24} />
              </Link>
              <Link
                href=""
                className="text-white hover:text-white focus:text-white"
              >
                <CiTwitter size={24} />
              </Link>
              <Link
                href=""
                className="text-white hover:text-white focus:text-white"
              >
                <AiOutlineLinkedin size={24} />
              </Link>
              <Image src="/images/trust.png" width={137} height={44} />
            </div>
          </div>
          <div className="w-full lg:flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
              {links.map((link) => (
                <span
                  key={link.id}
                  className="text-white font-semibold text-lg capitalize block"
                >
                  {link.heading}

                  <div className="mt-5">
                    {link.links.map((item) => (
                      <Link
                        href=""
                        className="block text-sm mt-1 text-[#dbdbdb] font-normal"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t mt-5 pt-5 border-gray-600 flex flex-wrap items-center justify-between space-x-5 pb-5 space-y-3">
          <p className="text-white text-base">
            &copy; {new Date().getFullYear()} LIQUI FLX. ALL RIGHTS RESERVED.
          </p>
          <button className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-[40px] h-[54px] px-6 capitalize text-lg text-white">
            <div className="flex items-center h-[54px] space-x-3">
              <FaRegComment /> <span>need help</span>
            </div>
          </button>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
