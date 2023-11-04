import DashboardMaster from "@/components/DashboardMaster";
import React from "react";

import ShowServiceTable from "@/components/service/ShowServiceTable";
const page = () => {
  return (
    <>
      <DashboardMaster>
        <ShowServiceTable />
      </DashboardMaster>
    </>
  );
};

export default page;
