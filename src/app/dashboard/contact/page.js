import DashboardMaster from "@/components/DashboardMaster";
import ShowContactTable from "@/components/contact/ShowContactTable";
const page = () => {
  return (
    <>
      <DashboardMaster>
        <ShowContactTable />
      </DashboardMaster>
    </>
  );
};

export default page;
