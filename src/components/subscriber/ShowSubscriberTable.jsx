"use client";
import { useState, useEffect } from "react";

const ShowSubscriberTable = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("/api/subscribe");
    const data = await response.json();
    setData(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1  lg:gap-x-3 gap-y-5 min-h-screen h-auto justify-center items-start">
        <div className="col-span-2 divide-gray-200 bg-white">
          <div className="flex justify-between items-center px-4 relative  border-b-2 border-sky-400">
            <span className="text-xl font-semibold  py-3 ">Subscribe List</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date
                  </th>
                  <th className="px-4 py-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    ghfgfh
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 flex justify-center gap-3">
                    ghfg
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSubscriberTable;
