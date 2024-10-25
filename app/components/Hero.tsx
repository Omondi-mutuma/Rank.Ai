// app/components/Hero.tsx
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

// Define the Hero component
const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[10px] my-10 transition-all">
      {/* Badge section */}
      <div className="flex box-border text-[14px] md:text-[16px] font-regular text-custom-purple gap-2 justify-center items-center px-[14px] py-[8px] border border-white/15 rounded-[40px] bg-background">
        <p className="p-[6px] rounded-full bg-custom-purple text-[10px] font-bold text-black">
          NEW
        </p>
        Latest integrations in artificial intelligence.
      </div>
      {/* Hero content section */}
      <div className="flex flex-col items-center justify-center text-center gap-4 max-w-[600px]">
        <h1 className="text-[48px] md:text-[82px] font-semibold tracking-[-0.0525em] leading-[52px] md:leading-[86px] bg-gradient-to-b from-white to-custom-purple text-transparent bg-clip-text">
          Boost your rankings with AI.
        </h1>
        <p className="px-4 font-normal text-[18px] leading-[26px] tracking-[-0.001em]">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <Button color="primary" size="medium">
          Start for free
        </Button>
      </div>
      <div className="hidden lg:block absolute w-[569px] h-[569px] left-1/2 -top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-900 filter blur-[60px]" />
      <div className="hidden lg:block absolute w-[269px] h-[269px] left-1/2 top-3/4 transform -translate-x-1/2 bg-purple-900 filter blur-[60px] -z-10" />
      {/* Image section */}
      <div className="relative p-px flex justify-center items-center mt-5 bg-gradient-to-r from-[#0D0718] to-[#0B0614] border border-transparent rounded-[10px] shadow-[0px_-20px_70px_rgba(140,69,255,0.25)] shadow-[0px_-19px_70px_rgba(140,69,255,0.4)]">
        <Image
          src={"/app-mobile.png"}
          alt="mobile view of app"
          width={356}
          height={257}
          className="md:hidden"
        />
        <Image
          src={"/app-desktop.png"}
          alt="mobile view of app"
          width={1098}
          height={658}
          className="hidden md:block"
        />
        <div className="absolute -bottom-5 left-0 h-full w-full bg-gradient-to-b from-transparent to-[#050208] via-transparent z-10" />
      </div>
    </section>
  );
};

export default Hero;
