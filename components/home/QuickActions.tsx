import { quickLinks } from "@/constants";
import React from "react";

const QuickActions = () => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-black py-6">Quick links</h2>
      <div className="grid grid-cols-4 gap-5">
        {quickLinks.map((link) => {
          return (
            <div key={link.id} className="rounded-lg bg-[#f3f7f6] p-5">
              <h3 className="text-[14px] font-extrabold text-[#2f3432]">
                {link.ads}
              </h3>
              <span className="text-sm text-[#424e4e]">
                {link.list.join(" | ")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
