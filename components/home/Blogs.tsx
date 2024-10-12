import Image from "next/image";
import React from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";
import job from "@/public/assets/images/job.svg";
import money from "@/public/assets/images/money.svg";
import { MdNavigateNext } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="mt-20 flex justify-between rounded-md shadow-xl">
      <div className="flex items-center gap-8 p-8">
        <Image src={money} alt="money" draggable={false} />
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-bold">Start making money!</h1>
          <div>
            <p className="text-sm text-[#424e4e]">
              Do you have something to sell?
            </p>
            <p className="text-sm text-[#424e4e]">
              Post your first ad and start making money!
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-full bg-[#ffc800] px-3 py-2">
            <HiMiniPlusCircle className="inline-block h-5 w-5 text-[#673500]" />
            <p className="font-bold text-[#673500]">Post your ad for free</p>
          </div>
        </div>
      </div>
      <div className="border" />
      <div className="flex flex-col gap-3 p-8">
        <Image src={job} alt="job" draggable={false} />
        <div>
          <p className="text-sm text-[#424e4e]">
            Looking to hire or get hired in Sri Lanka ?
          </p>
          <p className="text-sm text-[#424e4e]">
            Get access to 400k+ CVs or browse through 4.5k+ job vacancies! !
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-[#0074ba] px-3 py-2">
          <p className="font-bold text-white">Explore more</p>
          <MdNavigateNext className="inline-block h-5 w-5 rounded-full bg-white text-[#0074ba]" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
