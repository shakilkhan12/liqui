"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: "Lorem ipsum dolor sit ",
      image: "/images/news-1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse dictum lorem in odio. Sem malesuada",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit ",
      image: "/images/news-2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse dictum lorem in odio. Sem malesuada",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit ",
      image: "/images/news-3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse dictum lorem in odio. Sem malesuada",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit ",
      image: "/images/news-1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse dictum lorem in odio. Sem malesuada",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit ",
      image: "/images/news-2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse dictum lorem in odio. Sem malesuada",
    },
  ]);
  return (
    <div className="py-[160px]">
      <Wrapper>
        <h1 className="text-white text-center text-4xl md:text-[48px] font-semibold">
          What's New
        </h1>
        <p className="text-[#dbdbdb] text-center text-lg mt-4">
          Stay updated with the latest news and important announcements
        </p>
        <div className="mt-12">
          <>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1080: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {blogs?.map((blog) => (
                <SwiperSlide key={blog.id} className="rounded-[16px] p-4">
                  <div className="relative w-full h-[291px] rounded-[16px] overflow-hidden">
                    <Image
                      src={blog.image}
                      fill
                      className="w-full h-full object-contain"
                      alt="blog image"
                    />
                  </div>
                  <h2 className="text-white mt-4 text-[24px] text-center">
                    {blog.title}
                  </h2>
                  <p className="mt-4 text-base text-gray-400 text-center">
                    {blog.description}
                  </p>
                  <Link
                    href="/"
                    className="text-[#01DAD6] hover:text-[#01DAD6] focus:text-[#01DAD6] text-lg capitalize underline inline-block mt-4 "
                  >
                    read more
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </Wrapper>
    </div>
  );
};

export default News;
