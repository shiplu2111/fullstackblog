"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import CatBlogs from "./CatBlogs";
import BlogCard from "./BlogCard";

const CategoryBlog = (props) => {
  const [selectedCategoryData, setSelectedCategoryData] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [blogListData, setBlogListData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const getData = async () => {
    const blogs = await fetch(
      `/api/blog/blogByCategory/?cat_id=${props.propData[0]}`
    );
    const catblog = await blogs.json();
    setBlogListData(catblog.data);
    // console.log(catblog.data);

    const result = await fetch(`/api/category/?cat_id=${props.propData[0]}`, {
      method: "PATCH",
    });
    const data = await result.json();
    setSelectedCategoryData(data.data);

    const response = await fetch("/api/category");
    const categories = await response.json();
    setCategoryData(categories.data);

    const featuredBlog = await fetch("/api/blog/limitBlog/?take_limit=8");
    const res = await featuredBlog.json();
    setBlogList(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <div className="bg-[#F6E8E8] py-[70px]  ">
          <div className="flex items-center justify-center px-0">
            <section className="overflow-hidden w-full bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat">
              <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-md font-bold text-white sm:text-3xl md:text-3xl">
                    {selectedCategoryData?.title}
                  </h2>
                </div>
              </div>
            </section>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 justify-center items-start pt-5 px-14">
            <div className="col-span-1 ">
              <div className="px-3 py-4 flex justify-start items-start ">
                <span>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full text-xl py-3 border focus:border-[1px] border-gray-900 pl-5 "
                  />
                </span>
                <span className="text-xl  px-3 py-4 border-l-0 border border-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer">
                  <FaSearch />
                </span>
              </div>
              <div className="px-3 text-xl py-4 flex justify-left font-bold items-center ">
                Recent Posts
              </div>
              <div className="px-3 grid grid-cols-1 gap-4 ">
                {blogList?.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="hover:text-[#5E3BEE] border-blue-300 border-b-[1px] pb-1 cursor-pointer"
                    >
                      {item.title}
                    </span>
                  );
                })}
              </div>
              <div className="px-3 text-xl py-4 flex justify-left font-bold items-center mt-7">
                Categories
              </div>
              <div className="px-3 grid grid-cols-1 gap-4 ">
                {categoryData?.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="hover:text-[#5E3BEE] border-blue-300 border-b-[1px] pb-1 cursor-pointer"
                    >
                      {item?.title}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="xl:col-span-3 border-[1px] border-sky-500 min-h-screen rounded-[10px]">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-8 py-4">
                {blogListData?.map((item, i) => {
                  return <BlogCard data={item} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlog;
