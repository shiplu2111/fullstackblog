import DashboardMaster from "@/components/DashboardMaster";
import ShowBlogTable from "@/components/blog/ShowBlogTable";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardMaster>
        <ShowBlogTable />
      </DashboardMaster>
    </>
  );
};

export default page;
