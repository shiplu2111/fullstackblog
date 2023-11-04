import DashboardMaster from "@/components/DashboardMaster";
import React from "react";
import Link from "next/link";
import ShowSubscriberTable from "@/components/subscriber/ShowSubscriberTable";
const page = () => {
  return (
    <>
      <DashboardMaster>
        <ShowSubscriberTable />
      </DashboardMaster>
    </>
  );
};

export default page;
