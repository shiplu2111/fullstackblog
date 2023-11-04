"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const SingleBlog = (props) => {
  const [blogData, setBlogData] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const getData = async () => {
    const result = await fetch(
      `/api/blog/singleBlog/?blog_id=${props.propData[0]}`,
      {
        method: "PATCH",
      }
    );
    const data = await result.json();
    setBlogData(data.data);
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
      <div className="bg-[#F6E8E8] py-[70px]  ">
        <div className="flex items-center justify-center px-0">
          <section className="overflow-hidden w-full bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat">
            <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-md font-bold text-white sm:text-3xl md:text-3xl">
                  {blogData?.title}
                </h2>
              </div>
            </div>
          </section>
        </div>
        <div className="grid grid-cols-4 gap-2 justify-center items-start pt-5 px-14">
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
                  <Link
                    href={"/artical/" + item.slug}
                    key={i}
                    className="hover:text-[#5E3BEE] border-blue-300 border-b-[1px] pb-1 cursor-pointer"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
            <div className="px-3 text-xl py-4 flex justify-left font-bold items-center mt-7">
              Categories
            </div>
            <div className="px-3 grid grid-cols-1 gap-4 ">
              {categoryData?.map((item, i) => {
                return (
                  <Link
                    href={`/category/${item.id}/${item.slug}`}
                    key={i}
                    className="hover:text-[#5E3BEE] border-blue-300 border-b-[1px] pb-1 cursor-pointer"
                  >
                    {item?.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-span-3 border-[1px] border-sky-500 min-h-screen rounded-[10px]">
            <div className="flex justify-center items-center p-3">
              <img
                className="w-full h-[400px] object-cover"
                src={blogData?.imgCDN}
                alt=""
              />
            </div>
            <div className="mt-3 text-2xl font-semibold flex justify-start items-center pl-3">
              {blogData?.title}
            </div>
            <div className="flex justify-start items-center text-sm font-[400] pl-3 py-2 border-b-2 border-sky-300">
              3 November 2023
            </div>

            <div className="flex justify-start items-center text-md font-[300] h-full px-3 py-2  text-justify leading-8">
              {blogData?.longDesc}
            </div>
            <div className="flex justify-left items-center py-3 mt-3  px-3 text-2xl font-semibold">
              Leave A Comment
            </div>

            <div className="px-3 grid grid-cols-3 gap-y-4 gap-x-2 items-center justify-start py-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-base py-3 border-[.1px] focus:border-[1px] border-gray-900 pl-5"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full text-base py-3 border-[.1px] focus:border-[1px] border-gray-900 pl-5"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Website"
                  className="w-full text-base py-3 border-[.1px]  border-gray-900 pl-5"
                />
              </div>
              <div className="col-span-3">
                <textarea
                  className="w-full text-base py-3 border-[.1px]  border-gray-900 pl-5"
                  name=""
                  id=""
                  rows="8"
                  placeholder="Comment"
                ></textarea>
              </div>
              <div>
                <button className="bg-[#1ce596] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white px-5 py-3 rounded-lg hover:">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
