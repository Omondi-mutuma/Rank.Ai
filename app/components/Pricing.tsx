import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

interface PricingProps {
  heading: string;
  price: string;
  cycle: string;
  features: string[]; // Specify that 'features' is an array of strings
  hasBackground?: boolean;
}

const pricing: PricingProps[] = [
  {
    heading: "Starter",
    price: "$29",
    cycle: "Month",
    features: ["SEO optimization", "Site audit", "Keyword tracking"], // Array of features
  },
  {
    heading: "Professional",
    price: "$59",
    cycle: "Month",
    features: [
      "SEO optimization",
      "Site audit",
      "Keyword tracking",
      "Advanced SEO",
      "Custom reports",
      "Unlimited projects",
      "Custom integrations",
    ],
    hasBackground: true,
  },
  {
    heading: "Enterprise",
    price: "$99",
    cycle: "Month",
    features: [
      "SEO optimization",
      "Site audit",
      "Keyword tracking",
      "Advanced SEO",
      "Custom reports",
      "Unlimited projects",
      "Dedicated support",
      "API access",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-[14px] overflow-hidden">
      <div className="flex flex-col gap-[10px] text-center">
        <h3 className="font-medium text-[26px]">Pricing</h3>
        <p className="font-normal text-[18px] leading-[31px]">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>

        <div className="flex justify-center items-center gap-2 mt-[10px]">
          <div className="w-[34px] h-[20px] rounded-full bg-custom-purple flex items-center px-px">
            <div className="h-[16px] w-[16px] bg-white rounded-full"></div>
          </div>
          <span className="text-[16px] text-white/70">Billed yearly</span>
        </div>
      </div>
      {/* Pricing components */}
      <div className="w-full flex flex-col gap-[10px] md:flex-row mt-10">
        {pricing.map((price) => (
          <div
            key={price.price}
            className="relative w-full max-h-max flex flex-col items-center gap-[20px] border border-white/15 rounded-[12px] p-5"
          >
            <div className="self-start">
              <h5 className="font-medium text-[24px]">{price.heading}</h5>
              <p className="text-[16px] text-white/70">{price.price}</p>
            </div>
            <div className="w-full bg-[#282729] h-px" />
            <ul className="h-full w-full mb-4">
              {price.features.map((feature, index) => (
                <li key={index} className="flex gap-1 items-center py-[10px]">
                  <CheckIcon />
                  <span className="text-[14px]">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full px-6">
              {price.hasBackground ? (
                <Button className="w-full">Join waitlist</Button>
              ) : (
                <Button color="secondary" className="w-full">
                  Join waitlist
                </Button>
              )}
            </div>
            {price.hasBackground && (
              <>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#010002] to-[#361764] rounded-[12px] -z-10" />
                <Image
                  src={"/Pattern.png"}
                  alt=""
                  layout="fill"
                  className="absolute bottom-0 left-0 opacity-50 -z-10"
                  loading="lazy"
                />
                <div className="absolute top-1/2 left-1/2 h-[500px] transform -translate-x-1/2 -translate-y-1/2  w-[315px] bg-[#8C45FF]/50 blur-[127px] -z-20" />
              </>
            )}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 h-[500px] transform -translate-x-1/2 -translate-y-1/2  w-[315px] bg-[#8C45FF]/50 blur-[127px] -z-20" />
    </section>
  );
};

export default Pricing;
