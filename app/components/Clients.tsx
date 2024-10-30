import { clients } from "@/constants";
import Image from "next/image";
import React from "react";

const Clients: React.FC = () => {
  return (
    <section className=" flex flex-col items-center text-center w-full py-10 gap-[40px]">
      <div>
        <span className="text-[16px] font-normal">
          Trusted by the world’s most innovative teams
        </span>
      </div>
      <div className="flex gap-2 justify-center items-center flex-wrap md:max-w-[90%]">
        {clients.map((client) => (
          <div
            key={client.client}
            className="flex justify-center px-[5px] lg:px-[40px] py-[32px] gap-[10px] rounded-[12px] border border-white/15 min-w-[175px] lg:min-w-[255px]"
          >
            <Image
              src={client.logo}
              alt="client logo"
              width={client.width}
              height={client.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
