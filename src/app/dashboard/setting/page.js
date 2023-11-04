import DashboardMaster from "@/components/DashboardMaster";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardMaster>
        <div className="flex h-screen justify-center items-start">
          <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex justify-center mx-auto">Setting</div>
          </div>
        </div>
      </DashboardMaster>
    </>
  );
};

export default page;
