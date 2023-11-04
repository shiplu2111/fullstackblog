import React from "react";
import Link from "next/link";
const BlogCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="py-[10px]">
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt="Office"
          src={data.imgCDN}
          className="h-56 w-full object-cover "
        />
        <div className="p-4 sm:p-6">
          <Link href={"/artical/" + data.slug}>
            <h3 className="text-lg font-medium line-clamp-2  text-gray-900">
              {data.title}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {data.shortDesc}
          </p>
          <Link
            href={"/artical/" + data.slug}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Read More
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              →
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
