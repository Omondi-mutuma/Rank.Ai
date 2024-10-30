import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const CTA: React.FC = () => {
  return (
    <section className="w-full relative py-10 overflow-hidden">
      <div className="relative border border-white/15 rounded-[12px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 h-[200px] w-[200px] lg:h-[250px] lg:w-[300px] bg-custom-purple blur-[100px] -z-50 overflow-hidden" />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black -z-30" />
        <Image
          src={"/cta-pattern.png"}
          alt=""
          width={390}
          height={474}
          loading="lazy"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-95 -z-10 md:hidden"
        />
        <Image
          src={"/pattern-wide.png"}
          alt=""
          width={2200}
          height={946}
          loading="lazy"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-95 -z-40 hidden md:block"
        />
        <div className="w-full flex flex-col gap-[40px] justify-center items-center py-[60px] px-[20px] lg:max-w-[40%]">
          <h3 className="font-medium text-[36px] leading-[43px] tracking-[-0.0105em] text-center md:text-[56px] md:leading-[65px]">
            AI-driven SEO for everyone.
          </h3>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:bg-background lg:border lg:border-white/15 lg:rounded-[12px] gap-[12px] z-10">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent rounded-[12px] border border-white/15 px-[18px] py-[15px] lg:border-transparent outline-none"
              placeholder="Your email address"
            />
            <Button color="primary" className="w-full">
              Join waitlist
            </Button>
          </div>
          <p className="text-[16px] text-white/50">
            No credit card required | 7-days free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
