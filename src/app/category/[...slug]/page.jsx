import Master from "@/components/Master";
import React from "react";
import Subscribe from "@/components/Subscribe";
import CategoryBlog from "@/components/CategoryBlog";

const page = ({ params }) => {
  return (
    <div>
      <Master>
        <CategoryBlog propData={params.slug} />
        <Subscribe />
      </Master>
    </div>
  );
};

export default page;
