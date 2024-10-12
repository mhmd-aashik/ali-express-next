import React from "react";
import footlogo from "@/public/assets/images/footlogo.svg";
import Image from "next/image";

const CopyRight = () => {
  return (
    <>
      <div className="w-[900px] flex items-center justify-between mx-auto">
        <h5 className="mb-2.5 text-sm text-[#2f3432]">
          © 2024. All rights reserved. Saltside Technologies
        </h5>
        <Image src={footlogo} alt="footlogo" />
      </div>
    </>
  );
};

export default CopyRight;
