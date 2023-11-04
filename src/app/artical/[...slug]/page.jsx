import Master from "@/components/Master";
import React from "react";
import Subscribe from "@/components/Subscribe";
import SingleBlog from "@/components/SingleBlog";

const page = ({ params }) => {
  return (
    <div>
      <Master>
        <SingleBlog propData={params.slug} />
        <Subscribe />
      </Master>
    </div>
  );
};

export default page;
