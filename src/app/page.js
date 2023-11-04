import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Master from "@/components/Master";
import Service from "@/components/Service";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="bg-[#F6E8E8]">
        <Master>
          <Header />
          <Hero />
          <Blogs />
          <Service />
          <Testimonial />
          <Subscribe />
        </Master>
      </div>
    </>
  );
}
