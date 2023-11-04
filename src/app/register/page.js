"use client";
import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";

const Register = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <section className="bg-white dark:bg-gray-900">
          <div className="flex justify-center min-h-screen w-screen">
            <div
              className="hidden bg-cover lg:block lg:w-2/5"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
              }}
            ></div>
            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div className="w-full">
                <div className="flex justify-center mx-auto">
                  <img className="w-auto h-[70px] " src="/logo.png" alt="" />
                </div>
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                  Get your free account now.
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Let’s get you all set up so you can verify your personal
                  account and begin setting up your profile.
                </p>

                <RegisterForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
