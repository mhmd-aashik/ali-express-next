import CopyRight from "@/components/footer/CopyRight";
import Footer from "@/components/footer/Footer";
import About from "@/components/home/About";
import Blogs from "@/components/home/Blogs";
import Categories from "@/components/home/Categories";
import QuickActions from "@/components/home/QuickActions";
import Search from "@/components/home/Search";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Search />
      <div className="mx-auto max-w-[1000px] px-5">
        <Categories />
        <Blogs />
        <QuickActions />
        <About />
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};

export default HomePage;
