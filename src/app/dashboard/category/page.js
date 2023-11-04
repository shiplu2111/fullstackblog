import DashboardMaster from "@/components/DashboardMaster";
import React from "react";
import Link from "next/link";
import ShowCategoryTable from "@/components/category/ShowCategoryTable";
const page = () => {
  return (
    <>
      <DashboardMaster>
        <ShowCategoryTable />
      </DashboardMaster>
    </>
  );
};

export default page;
