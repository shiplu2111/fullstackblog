"use client";
import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Hero = () => {
  const [data, setData] = useState([]);
  const [brakingBlogData, setBrakingBlogData] = useState([]);
  const getData = async () => {
    const featuredBlog = await fetch("/api/blog/featuredblog");
    const data = await featuredBlog.json();
    setData(data.data);

    const res = await fetch("/api/blog/brakingblog");
    const brakingBlog = await res.json();
    setBrakingBlogData(brakingBlog.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="px-[43px]  grid grid-cols-1 xl:grid-cols-3 gap-3 justify-center items-center pb-11">
        <div className="xl:col-span-2 w-full h-[452px] bg-slate-800">
          <Carousel responsive={responsive}>
            {data.map((item, i) => {
              return (
                <div className="relative">
                  <img
                    className="h-[452px] w-full object-cover"
                    src={item.imgCDN}
                    alt=""
                  />
                  <Link
                    href={"/artical/" + item.slug}
                    className="bg-slate-500 flex  w-full absolute bottom-0 bg-transparent-[rgba(0,0,0,0.5)] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-50 text-lg font-medium text-white text-[28px] justify-center"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="h-[452px] flex flex-col md:flex-row  xl:flex-col gap-2 justify-center">
          {brakingBlogData.map((item, i) => {
            return (
              <div className="bg-slate-400 w-full h-[222px]">
                <div className="relative">
                  <img
                    className=" w-full object-fill h-[222px]"
                    src={item.imgCDN}
                    alt=""
                  />
                  <Link
                    href={"/artical/" + item.slug}
                    className="bg-slate-500 flex  w-full absolute bottom-0 bg-transparent-[rgba(0,0,0,0.5)] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-50 text-lg font-medium text-white text-[28px] justify-center items-center"
                  >
                    <span className="px-4">{item.title}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
