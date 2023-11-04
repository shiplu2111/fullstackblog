"use client";
import Swal from "sweetalert2";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ErrorToast, SuccessToast } from "@/utility/auth/FormHelper";

const ShowBlogTable = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("/api/blog");
    const data = await response.json();
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteServiceHandler = async (id) => {
    const res = await fetch(`/api/blog/?blog_id=${id}`, {
      method: "DELETE",
    });
    let data = await res.json();
    if (data.status === "success") {
      SuccessToast(data.message);
    } else {
      ErrorToast(data.message);
    }
    getData();
  };
  const deleteAlertHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteServiceHandler(id);
      }
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1  lg:gap-x-3 gap-y-5 min-h-screen h-auto justify-center items-start">
        <div className="col-span-2 divide-gray-200 bg-white">
          <div className="flex justify-between items-center px-4 relative  border-b-2 border-sky-400">
            <span className="text-xl font-semibold  py-3 ">Blog List</span>
            <Link
              href="/dashboard/blog/create"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Add New Blog
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Blog Title
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Blog Slug
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Blog Image
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Action
                  </th>
                  <th className="px-4 py-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {data.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {item.title}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.slug}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">
                        <img
                          className="h-10 w-10 object-cover mx-auto"
                          src={item.imgCDN}
                          alt="img"
                        />
                      </td>

                      <td className="whitespace-nowrap px-4 py-2 flex justify-center gap-3">
                        <Link
                          href={`/dashboard/blog/edit/${item.id}`}
                          className="inline-block rounded bg-indigo-600 px-2 py-2 text-md font-medium text-white hover:bg-indigo-700 cursor-pointer"
                        >
                          <FaEdit />
                        </Link>

                        <span
                          className="inline-block rounded bg-indigo-600 px-2 py-2 text-md font-medium text-white hover:bg-indigo-700  cursor-pointer"
                          onClick={() => deleteAlertHandler(item.id)}
                        >
                          <FaTrashAlt />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogTable;
