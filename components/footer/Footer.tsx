import { footerLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import playStore from "@/public/assets/images/playstore.svg";
import appStore from "@/public/assets/images/appstore.svg";
import bangladesh from "@/public/assets/images/bangladesh.svg";
import Link from "next/link";
import footlogo from "@/public/assets/images/footlogo.svg";

const Footer = () => {
  return (
    <>
      <div className="mt-10 bg-[#f3f7f6] px-5 py-10">
        <div className="mx-auto flex max-w-[1000px] px-5">
          <div className="grid w-full grid-cols-5">
            {footerLinks.map((link) => {
              return (
                <div key={link.id} className="flex flex-col gap-3">
                  <h2 className="text-l font-bold text-[#424e4e]">
                    {link.title}
                  </h2>
                  <div>
                    {link.list.map((item, i) => {
                      return (
                        <p className="mb-2.5 text-sm text-[#2f3432]" key={i}>
                          {item}
                        </p>
                      );
                    })}
                    {link.socials && (
                      <div className="flex items-center gap-1">
                        {link.socials.map((social) => (
                          <Link key={social.id} href={social.link}>
                            <Image src={social.image} alt={social.name} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col gap-3">
              <h2 className="text-l font-bold text-[#424e4e]">
                Downlord our app
              </h2>
              <div className="flex flex-col gap-2">
                <Image src={playStore} alt="playstore" />
                <Image src={appStore} alt="playstore" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-l font-bold text-[#424e4e]">
                  Other Countries
                </h2>
                <div className="flex items-center gap-2 text-sm text-[#707676]">
                  <Image src={bangladesh} alt="bangladesh" />
                  Banladesh
                </div>
              </div>
            </div>
            <div className="mx-auto mt-6 w-[900px] border" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
