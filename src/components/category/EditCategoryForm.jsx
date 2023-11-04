"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/auth/FormHelper";
const EditCategoryForm = (props) => {
  const [formValue, setFormValue] = useState({
    title: "",
    slug: "",
    shortDesc: "",
    longDesc: "",
    imgCDN: "",
  });
  const router = useRouter();
  const getData = async () => {
    const result = await fetch(`/api/category/?cat_id=${props.propData[0]}`, {
      method: "PATCH",
    });
    const data = await result.json();
    setFormValue(data.data);
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
      ErrorToast("Image Link Required");
    } else if (IsEmpty(formValue.shortDesc)) {
      ErrorToast("Short Description Required");
    } else if (IsEmpty(formValue.longDesc)) {
      ErrorToast("Description Required");
    } else {
      const result = await fetch(`/api/category/?cat_id=${props.propData[0]}`, {
        method: "PUT",
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
      }
    }
  };
  return (
    <>
      <div className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">
            Service
          </label>
          <input
            value={formValue.title}
            onChange={(e) => inputChange("title", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Service Title...."
            type="text"
            id="title"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="name">
            Slug
          </label>
          <input
            value={formValue.slug}
            onChange={(e) => inputChange("slug", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Slug...."
            type="text"
            id="slug"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="name">
            Image Link
          </label>
          <input
            value={formValue.imgCDN}
            onChange={(e) => inputChange("imgCDN", e.target.value)}
            className="w-full rounded-lg border-[1px] focus:border-[.5px] focus:border-gray-500 border-sky-400 p-3 text-sm"
            placeholder="Image Link...."
            type="text"
            id="imgCDN"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            value={formValue.shortDesc}
            onChange={(e) => inputChange("shortDesc", e.target.value)}
            className="w-full rounded-lg border-[1px] border-sky-400 p-3 text-sm"
            placeholder="Short Description"
            rows={8}
            id="message"
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold text-gray-600 uppercase py-3 pl-2"
            htmlFor="name"
          >
            Service Description
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
            Update Category
          </button>
        </div>
      </div>
    </>
  );
};

export default EditCategoryForm;
