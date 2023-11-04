"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("/api/category");
    const data = await response.json();
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="mx-[43px] my-[20px]">
        <div>
          {/* <div className="sm:hidden">
            <div>
              <select
                name="HeadlineAct"
                id="HeadlineAct"
                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              >
                {data.map((item, i) => {
                  return (
                    <option value="">
                      <a href="#">Please select</a>
                    </option>
                  );
                })}
              </select>
            </div>
          </div> */}
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav
                className="-mb-px flex justify-center gap-6"
                aria-label="Tabs"
              >
                {data.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={`/category/${item.id}/${item.slug}`}
                      className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
