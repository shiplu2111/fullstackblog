import Master from "@/components/Master";
import Subscribe from "@/components/Subscribe";
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Master>
        <div className="bg-white flex items-center justify-center w-full object-cover">
          <section className="w-full overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat">
            <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                  About Us
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
        <div className="bg-white py-10">
          <section className="overflow-hidden bg-[#F6E8E8] sm:grid sm:grid-cols-2">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>
                <p className="hidden text-gray-500 md:mt-4 md:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
            <img
              alt="Student"
              src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full object-cover sm:h-full"
            />
          </section>
        </div>

        <div className="px-3 ">
          <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="py-3 sm:py-4">
                        <img
                          src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="py-3 sm:py-4">
                        <img
                          src="https://i.ibb.co/rfHFq15/image-2.jpg"
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="relative z-10 my-4">
                        <img
                          src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <span className="block mb-4 text-lg font-semibold text-primary">
                      Why Choose Us
                    </span>
                    <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                      Make your customers happy by giving services.
                    </h2>
                    <p className="mb-5 text-base text-body-color dark:text-dark-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less.
                    </p>
                    <p className="mb-8 text-base text-body-color dark:text-dark-6">
                      A domain name is one of the first steps to establishing
                      your brand. Secure a consistent brand image with a domain
                      name that matches your business.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Subscribe />
      </Master>
    </>
  );
};

export default page;
