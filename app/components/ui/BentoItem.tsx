import Image from "next/image";
import React from "react";

interface Feature {
  id: string; // Assuming each feature has a unique ID
  title: string;
  subtitle: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
  hasBackground: boolean;
  className?: string;
  position?: string;
}

const BentoItem: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <>
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`relative col-span-1 border border-white/15 rounded-[10px] min-h-[400px] p-[20px] ${feature.className} overflow-hidden transition-transform duration-300 hover:scale-105`}
          role="article" // Semantic role for accessibility
        >
          {feature.hasBackground && (
            <>
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black to-custom-purple rounded-[10px] -z-10" />
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[#361764] via-[rgba(3,1,6,0)] rounded-[10px] z-10" />
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
                "absolute bottom-0 -right-[20px] md:top-[20px] md:left-[20px]"
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
