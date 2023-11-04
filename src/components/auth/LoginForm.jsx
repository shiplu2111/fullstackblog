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
const LoginForm = () => {
  const [formValue, SetFormValue] = useState({
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
    if (IsEmpty(formValue.email)) {
      ErrorToast("Email Required");
    } else if (IsEmail(formValue.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(formValue.password)) {
      ErrorToast("Password Required");
    } else {
      const result = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      const data = await result.json();
      if (data.status === "success") {
        router.push("/dashboard");
        SuccessToast(data.message);
        window.location.reload();
      } else {
        ErrorToast(data.message);
      }
    }
  };
  return (
    <>
      <div>
        <div className="mt-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              onChange={(e) => inputChange("email", e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >
                Forget Password?
              </a>
            </div>
            <input
              type="password"
              onChange={(e) => inputChange("password", e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
