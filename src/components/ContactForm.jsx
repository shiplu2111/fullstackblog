"use client";
import { useState } from "react";
import {
  ErrorToast,
  IsEmpty,
  SuccessToast,
  IsEmail,
} from "@/utility/auth/FormHelper";
const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const inputChange = (name, value) => {
    setFormValue((formValue) => ({
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
      ErrorToast("Please Enter Valid Email");
    } else if (IsEmpty(formValue.email)) {
      ErrorToast("Email Required");
    } else if (IsEmpty(formValue.mobile)) {
      ErrorToast("Phone Number Required");
    } else if (IsEmpty(formValue.message)) {
      ErrorToast("Message Required");
    } else {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      const data = await result.json();
      if (data.status === "success") {
        SuccessToast(data.message);
        setFormValue({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        SuccessToast(data.message);

        console.log(data);
      }
    }
  };
  return (
    <div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div className="mb-6 col-span-1">
          <input
            onChange={(e) => inputChange("firstName", e.target.value)}
            type="text"
            placeholder="Your Name"
            className=" border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6 col-span-1">
          <input
            onChange={(e) => inputChange("lastName", e.target.value)}
            type="text"
            placeholder="Your Name"
            className=" border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6 col-span-2">
          <input
            onChange={(e) => inputChange("email", e.target.value)}
            type="email"
            placeholder="Your Email"
            className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6 col-span-2">
          <input
            onChange={(e) => inputChange("mobile", e.target.value)}
            type="text"
            placeholder="Your Phone"
            className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6 col-span-2">
          <textarea
            onChange={(e) => inputChange("message", e.target.value)}
            rows={6}
            placeholder="Your Message"
            className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
            defaultValue={""}
          />
        </div>
        <div className=" col-span-2">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full  p-3  text-gray-900 transition border rounded border-primary bg-primary hover:bg-opacity-10"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
