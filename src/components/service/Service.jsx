"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
const Service = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const featuredBlog = await fetch("/api/service/");
    const data = await featuredBlog.json();
    setData(data.data);
    // console.log(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find your career path
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                assumenda? Deleniti quasi inventore, libero reiciendis minima
                aliquid tempora. Obcaecati, autem.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {data.map((item) => {
                return (
                  <a
                    key={item.id}
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <img
                        className="h8 w-10 rounded-full shadow-2xl object-cover"
                        src={item.imgCDN}
                        alt=""
                      />
                    </span>
                    <h2 className="mt-2 font-bold">{item.title}</h2>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {item.shortDesc}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
