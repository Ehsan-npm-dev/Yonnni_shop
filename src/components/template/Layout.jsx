import React from "react";
import Header from "../organize/Header";
import Footer from "../organize/Footer";
function Layout({children}) {
  return (
    <div className="bg-[#f4f3f3] flex flex-col items-center">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <Header />
        {children}
        <Footer/>
      </div>
      
    </div>
  );
}

export default Layout;
