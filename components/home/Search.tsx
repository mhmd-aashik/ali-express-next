import React from "react";
import { Input } from "@/components/ui/input";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="bg-[#149676]">
      <div className="mx-auto -mt-1 flex h-[185px] max-w-[1000px] items-center justify-center px-5">
        <div className="flex flex-col items-center gap-5">
          <div className="flex w-fit items-center rounded-full bg-[#118570] px-3 py-1 text-sm text-white">
            <FaLocationDot />
            All of Srilanka
          </div>
          <div className="relative w-[895px]">
            <Input
              className="h-14 w-[895px] rounded-full placeholder:pl-4 placeholder:text-lg placeholder:font-extralight placeholder:text-gray-400"
              placeholder="What are we looking for?"
            />
            <div className="absolute right-1 top-1 grid h-12 w-12 place-items-center rounded-full bg-[#ffc800]">
              <IoSearch className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
