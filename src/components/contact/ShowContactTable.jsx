"use client";
import Swal from "sweetalert2";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ErrorToast, SuccessToast } from "@/utility/auth/FormHelper";

const ShowContactTable = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("/api/contact");
    const data = await response.json();
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1  lg:gap-x-3 gap-y-5 min-h-screen h-auto justify-center items-start">
        <div className="col-span-2 divide-gray-200 bg-white">
          <div className="flex justify-between items-center px-4 relative  border-b-2 border-sky-400">
            <span className="text-xl font-semibold  py-3 ">Contact List</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Phone Number
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Message
                  </th>
                  <th className="px-4 py-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {data.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {item.firstName} {item.lastName}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">
                        {item.mobile}
                      </td>

                      <td className="whitespace-nowrap px-4 py-2 flex justify-center gap-3">
                        {item.message}
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

export default ShowContactTable;
