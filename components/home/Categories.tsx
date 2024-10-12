import { categories } from "@/constants";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div>
      <h1 className="py-10 text-[14px] font-bold text-black">
        Browse itm by category
      </h1>
      <div className="gap-y-15 grid grid-cols-4 gap-10 px-10">
        {categories.map((category) => {
          return (
            <div key={category.id} className="flex items-center gap-2">
              <Image
                src={category.image}
                alt={category.name}
                height={40}
                width={40}
                draggable={false}
                priority
              />
              <div>
                <h2 className="text-[16px]">{category.name}</h2>
                <p className="text-[12px] text-[#707676]">{category.ads} ads</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
