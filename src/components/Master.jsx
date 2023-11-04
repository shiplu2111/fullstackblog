import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Master(props) {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </>
  );
}

export default Master;
