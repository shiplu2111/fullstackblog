"use client";
import React from "react";
import BlogCard from "./BlogCard";

import { useEffect, useState } from "react";

const CatBlogs = (props) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const featuredBlog = await fetch(
      `/api/blog/blogByCategory/?cat_id=${props.propData[0]}`
    );
    const data = await featuredBlog.json();
    setData(data.data);
    // console.log(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="bg-[#F6E8E8] flex  items-center text-[28px] font-[500]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  items-center justify-start gap-2 px-[43px] py-6">
        {data.map((item) => {
          return <BlogCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CatBlogs;
