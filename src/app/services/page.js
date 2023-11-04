import Master from "@/components/Master";
import Service from "@/components/service/Service";
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Master>
        <div>
          <div className="bg-white flex items-center justify-center w-full object-cover">
            <section className="w-full overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat">
              <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Our Awsome Services
                  </h2>

                  <div className="mt-4 sm:mt-8">
                    <Link
                      href="/contact-us"
                      className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Get Yours Today
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <Service />
          </div>
        </div>
      </Master>
    </>
  );
};

export default page;
