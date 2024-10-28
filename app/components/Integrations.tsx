import { integrations } from "@/constants";
import React from "react";

const Integrations: React.FC = () => {
  return (
    <section className="flex flex-col gap-[40px] py-[76px] px-[50px] w-full bg-gradient-to-br from-[#190D2E] to-[#020103] rounded-[10px]">
      <h3 className="font-medium text-[26px] md:text-[56px] md:leading-[65px] leading-[85px] max-w-[360px]">
        Elevate your SEO efforts.
      </h3>
      <div className="flex flex-col gap-[40px]  md:flex-row md:justify-between md:flex-wrap">
        {integrations.map((integration, index) => (
          <div key={index} className="flex flex-col gap-[10px] max-w-[250px]">
            <h4 className="flex items-center gap-2 font-medium text-[16px] leading-[29px]">
              {React.createElement(integration.icon)}{" "}
              {/* Render dynamic icon */}
              {integration.title}
            </h4>
            <p className="text-white/70 text-[16px] leading-[26px]">
              {integration.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
