"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/auth/FormHelper";
const CreateCategoryForm = () => {
  const router = useRouter();

  const [formValue, setFormValue] = useState({
    title: "",
    slug: "",
    shortDesc: "",
    longDesc: "",
    imgCDN: "",
  });

  const inputChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (IsEmpty(formValue.title)) {
      ErrorToast("Title Required");
    } else if (IsEmpty(formValue.slug)) {
      ErrorToast("Slug Required");
    } else if (IsEmpty(formValue.imgCDN)) {
      ErrorToast("Image Link Required");
    } else if (IsEmpty(formValue.shortDesc)) {
      ErrorToast("Short Description Required");
    } else if (IsEmpty(formValue.longDesc)) {
      ErrorToast("Description Required");
    } else {
      const result = await fetch("/api/category", {
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
    <>
      <div className="space-y-4">
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Category Title
          </label>
          <input
            onChange={(e) => inputChange("title", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Title...."
            type="text"
            id="title"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Category Slug
          </label>
          <input
            onChange={(e) => inputChange("slug", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Slug...."
            type="text"
            id="slug"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Category Image Link
          </label>
          <input
            onChange={(e) => inputChange("imgCDN", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Image Link...."
            type="text"
            id="imgCDN"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="message"
          >
            Category Short Description
          </label>
          <textarea
            onChange={(e) => inputChange("shortDesc", e.target.value)}
            className="w-full rounded-lg border-[1px] border-sky-400 p-3 text-sm"
            placeholder="Category Short Description"
            rows={8}
            id="message"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Category Long Description
          </label>
          <textarea
            onChange={(e) => inputChange("longDesc", e.target.value)}
            className="w-full rounded-lg border-[1px] border-sky-400 p-3 text-sm"
            rows={12}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full  py-3 mt-[100px] font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Add Category
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateCategoryForm;
