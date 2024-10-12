"use client";
import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-12 flex flex-col items-start gap-4">
      <div>
        <h2 className="text-l font-bold text-[#707676]">
          About ikman, The Largest Marketplace in Sri Lanka!
        </h2>
        <div className="flex flex-col gap-2">
          <p className="break-words text-sm text-[#707676]">
            Sri Lanka’s household name for buying and selling anything to
            everything online. Do you want to buy a property? Check ikman! Do
            you want to sell a bike? Check ikman.
          </p>
          <p className="break-words text-sm text-[#707676]">
            ikman has the widest selection of items across Sri Lanka and over 50
            different categories. Whether you&apos;re looking for a car, mobile
            phone, house, computer or pet, you will find the best deal on ikman.
            Our search and filters make it easy to find precisely what
            you&apos;re looking for!
          </p>
        </div>
      </div>

      {show && (
        <>
          <div>
            <h2 className="text-l font-bold text-[#707676]">
              Buy, Sell New and Used Items Or Land Jobs Through ikman
            </h2>
            <div className="flex flex-col gap-2">
              <p className="break-words text-sm text-[#707676]">
                Every month hundreds of new users use ikman. SME’s and small
                businesses signup for memberships. You can search & filter
                products & services from the comfort of your own home.
              </p>
              <p className="break-words text-sm text-[#707676]">
                As one of the free advertising sites in Sri Lanka it has helped
                many people to find their favourite phones, pets, cars, and
                properties. Or even the dream job through classified ads in no
                time. This feature on ikman makes it easy for you to find
                exactly what you&apos;re looking for and saves time.
              </p>

              <p className="break-words text-sm text-[#707676]">
                You can sign up for a free account to start selling your items.
                It takes less than 2 minutes to post an ad. Visit How to sell
                fast for some tips on creating great ads that generate a lot of
                buyer interest. It goes without saying that when you have the
                membership, you are automatically entitled to more perks.
              </p>

              <p className="break-words text-sm text-[#707676]">
                If you have many items to sell, a membership would be the ideal
                choice. We also have some great tools that help make your ad
                stand out. Check out the Boost Ad page for more information.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-l font-bold text-[#707676]">
              Perks of online shopping on ikman
            </h2>
            <div className="flex flex-col gap-2">
              <p className="break-words text-sm text-[#707676]">
                There are free advertising sites in Sri Lanka but finding the
                top-ranking one like ikman isn&apos;t a hard shot. Whether you
                want to buy used items or sell used items, you only have minutes
                of procedures for it all. Type Sri Lanka buy and sell, and
                you&apos;ll see ikman on top searches. People prefer it over
                other free advertising sites Sri Lanka because:
              </p>
              <p className="break-words text-sm text-[#707676]">
                Effortless navigation — as soon as you see a free classified
                website, you don&apos;t feel you&apos;ll get quality services,
                but ikman proves you wrong. Suppose you want to sell new items
                or buy new items. You just have to read through the instructions
                about Post ads free and follow them. Once you do, you&apos;ll
                have your ad up and running. All under a few minutes, and
                that&apos;s how navigation works; faster, simpler, and minimal.
              </p>

              <p className="break-words text-sm text-[#707676]">
                Secure and Safe Shopping — Buy online or sell online is only
                good as long as classified sites are ready to provide secure and
                safe shopping. You can even use the location selector to find
                deals close to you or check out ads to have items delivered
                directly to you with 100% buyer protection. The site&apos;s been
                around for years because it has earned the users&apos; trust.
              </p>

              <p className="break-words text-sm text-[#707676]">
                Looking for the right buyer in Srilanka? Post an ad to sell or
                rent anything faster on market.
              </p>
            </div>
          </div>
        </>
      )}
      <button
        onClick={() => setShow((state) => !state)}
        className="flex items-center gap-1 text-sm text-[#707676]"
      >
        {show ? "Show Less" : "Show More"}
        {show ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
      </button>
    </div>
  );
};

export default About;
