import { features } from "@/constants";
import Image from "next/image";
import React from "react";

const BentoItem: React.FC = () => {
  return (
    <>
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`relative border border-white/15 rounded-[10px] min-h-[400px] p-[20px] ${feature.colSpan}`}
          role="article" // Semantic role for accessibility
        >
          {feature.hasBackground && (
            <>
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black to-custom-purple rounded-[10px] -z-10" />
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[#2b1747] via-[rgba(3,1,6,0)] rounded-[10px] z-10" />
            </>
          )}
          <div className={`${feature.position} overflow-hidden`}>
            <Image
              src={feature.image}
              alt={feature.title} // Meaningful alt text
              width={feature.imgWidth}
              height={feature.imgHeight}
              className={`${
                feature.hasBackground &&
                "absolute top-10 -right-[20px] md:top-[20px] md:left-[20px]"
              }`}
              loading="lazy" // Lazy loading for performance
            />
          </div>
          <div className="absolute bottom-0 pb-[20px] z-20">
            <h4 className="font-medium text-[16px] leading-[32px] mt-2">
              {feature.title}
            </h4>
            <p className="font-normal text-[16px] leading-[29px] text-white/70 mt-2">
              {feature.subtitle}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BentoItem;
