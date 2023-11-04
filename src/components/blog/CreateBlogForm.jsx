"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/auth/FormHelper";
const CreateBlogForm = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [breaking, setBreaking] = useState(false);
  const getData = async () => {
    const response = await fetch("/api/category");
    const data = await response.json();
    setCategoryData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const router = useRouter();

  const [formValue, setFormValue] = useState({
    title: "",
    slug: "",
    imgCDN: "",
    imgCDN2: "",
    imgCDN3: "",
    imgCDN4: "",
    imgCDN5: "",
    shortDesc: "",
    longDesc: "",
    category_id: "",
    featured: false,
    breaking: false,
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
      ErrorToast("Image Link 1 Required");
    } else if (IsEmpty(formValue.imgCDN2)) {
      ErrorToast("Image Link 2 Required");
    } else if (IsEmpty(formValue.imgCDN3)) {
      ErrorToast("Image Link 3 Required");
    } else if (IsEmpty(formValue.imgCDN4)) {
      ErrorToast("Image Link 4 Required");
    } else if (IsEmpty(formValue.imgCDN5)) {
      ErrorToast("Image Link 5 Required");
    } else if (IsEmpty(formValue.shortDesc)) {
      ErrorToast("Short Description Required");
    } else if (IsEmpty(formValue.longDesc)) {
      ErrorToast("Description Required");
    } else {
      const result = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      const data = await result.json();
      if (data.status === "success") {
        SuccessToast(data.message);

        router.push("/dashboard/blog");
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
            Blog Title
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
            Blog Slug
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
            Blog Category
          </label>
          <select
            onChange={(e) => inputChange("category_id", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Slug...."
            type="text"
            id="slug"
          >
            {categoryData.map((item) => (
              <option value={item.id}>{item.title}</option>
            ))}
          </select>
        </div>
        <div className="flex items-start gap-4 justify-start">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              className="w-5 h-5"
              id="Breaking"
              name="Breaking"
              onChange={(e) => {
                const isChecked = e.target.checked;
                if (isChecked) {
                  setFormValue((formValue) => ({
                    ...formValue,
                    breaking: true,
                  }));
                } else {
                  setFormValue((formValue) => ({
                    ...formValue,
                    breaking: false,
                  }));
                }
              }}
            />
            <label
              className=" text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
              htmlFor="name"
            >
              Breaking
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              className="w-5 h-5  rounded-full"
              id="featured"
              name="featured"
              onChange={(e) => {
                const isChecked = e.target.checked;
                if (isChecked) {
                  setFormValue((formValue) => ({
                    ...formValue,
                    featured: true,
                  }));
                } else {
                  setFormValue((formValue) => ({
                    ...formValue,
                    featured: false,
                  }));
                }
              }}
            />
            <label
              className=" text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
              htmlFor="name"
            >
              Featured
            </label>
          </div>
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Blog Image Link 1
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
            htmlFor="name"
          >
            Blog Image Link 2
          </label>
          <input
            onChange={(e) => inputChange("imgCDN2", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Image Link...."
            type="text"
            id="imgCDN"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Blog Image Link 3
          </label>
          <input
            onChange={(e) => inputChange("imgCDN3", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Image Link...."
            type="text"
            id="imgCDN"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Blog Image Link 4
          </label>
          <input
            onChange={(e) => inputChange("imgCDN4", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Image Link...."
            type="text"
            id="imgCDN"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Blog Image Link 5
          </label>
          <input
            onChange={(e) => inputChange("imgCDN5", e.target.value)}
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
            Blog Short Description
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
            Blog Long Description
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
            Add Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBlogForm;
