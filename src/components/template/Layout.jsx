import React from "react";
import Header from "../organize/Header";
import Footer from "../organize/Footer";
function Layout({children}) {
  return (
    <div className="bg-[#eee] flex flex-col items-center">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <Header />
        {children}
      
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
