"use client";
import { useState } from "react";
import {
  ErrorToast,
  IsEmpty,
  SuccessToast,
  IsEmail,
} from "@/utility/auth/FormHelper";
const Subscribe = () => {
  const [formValue, setFormValue] = useState({
    email: "",
  });

  const inputChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (IsEmpty(formValue.email)) {
      ErrorToast("Title Required");
    } else if (IsEmail(formValue.email)) {
      ErrorToast("Please Enter Valid Email");
    } else {
      const result = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      const data = await result.json();
      if (data.status === "success") {
        SuccessToast(data.message);

        router.push("/dashboard/category");
      } else {
        SuccessToast(data.message);

        console.log(data);
      }
    }
  };
  return (
    <div>
      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolor officia blanditiis repellat in, vero, aperiam porro ipsum
              laboriosam consequuntur exercitationem incidunt tempora nisi?
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <div className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  onChange={(e) => inputChange("email", e.target.value)}
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="button"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Sign Up </span>
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
