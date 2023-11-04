"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsNotMatch,
  SuccessToast,
} from "@/utility/auth/FormHelper";
const RegisterForm = () => {
  const [formValue, SetFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const inputChange = (name, value) => {
    SetFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (IsEmpty(formValue.firstName)) {
      ErrorToast("First Name Required");
    } else if (IsEmpty(formValue.lastName)) {
      ErrorToast("Last Name Required");
    } else if (IsEmail(formValue.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(formValue.password)) {
      ErrorToast("Password Required");
    } else {
      const result = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      const data = await result.json();
      if (data.status === "Success") {
        SuccessToast("Account Created Successfully");
        router.push("/login");
      }
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            First Name
          </label>
          <input
            onChange={(e) => inputChange("firstName", e.target.value)}
            type="text"
            placeholder="John"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Last name
          </label>
          <input
            onChange={(e) => inputChange("lastName", e.target.value)}
            type="text"
            placeholder="Snow"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block  mb-2 text-sm text-gray-600 dark:text-gray-200">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => inputChange("email", e.target.value)}
            placeholder="johnsnow@example.com"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Password
          </label>
          <input
            onChange={(e) => inputChange("password", e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          <span>Sign Up </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
