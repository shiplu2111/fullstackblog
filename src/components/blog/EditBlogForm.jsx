"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/auth/FormHelper";
const EditBlogForm = (props) => {
  const [checkFeatured, setCheckFeatured] = useState(false);
  const [checkBreaking, setCheckBreaking] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
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
  });
  const router = useRouter();

  const getData = async () => {
    const result = await fetch(`/api/blog/?blog_id=${props.propData[0]}`, {
      method: "PATCH",
    });
    const data = await result.json();
    setFormValue(data.data);
    setCheckFeatured(data.data.isFeatured);
    setCheckBreaking(data.data.isBreaking);

    const response = await fetch("/api/category");
    const catData = await response.json();
    setCategoryData(catData.data);
  };

  useEffect(() => {
    getData();
  }, []);
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
      const result = await fetch(`/api/blog/?blog_id=${props.propData[0]}`, {
        method: "PUT",
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
            value={formValue.title}
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
            value={formValue.slug}
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
            value={formValue.category_id}
            onChange={(e) => inputChange("category_id", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Category Slug...."
            type="text"
            id="slug"
          >
            {categoryData.map((item) => (
              <option
                value={item.id}
                key={item.id}
                selected={formValue.category_id === item.id}
              >
                {item.title}
              </option>
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
              checked={checkBreaking}
              onChange={(e) => {
                setCheckBreaking(!checkBreaking);
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
              checked={checkFeatured}
              onChange={(e) => {
                setCheckFeatured(!checkFeatured);
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
            value={formValue.imgCDN}
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
            value={formValue.imgCDN2}
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
            value={formValue.imgCDN3}
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
            value={formValue.imgCDN4}
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
            value={formValue.imgCDN5}
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
            value={formValue.shortDesc}
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
            value={formValue.longDesc}
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
            Update Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBlogForm;
