import DashboardMaster from "@/components/DashboardMaster";

import CreateServiceForm from "@/components/service/CreateServiceForm";
const page = () => {
  return (
    <>
      <DashboardMaster>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 ">
              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <div className="flex items-center justify-center pb-2 text-lg font-medium">
                  Add Service
                </div>
                <CreateServiceForm />
              </div>
            </div>
          </div>
        </section>
      </DashboardMaster>
    </>
  );
};

export default page;
