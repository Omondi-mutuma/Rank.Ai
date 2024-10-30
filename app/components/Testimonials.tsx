import { QuoteIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full min-h-max flex flex-col items-center gap-[10px] py-[50px] overflow-hidden">
      <div className="flex flex-col justify-center items-center max-w-[80%] lg:max-w-[35%]">
        <h3 className="font-medium text-[26px] md:text-[52px]">Our clients</h3>
        <p className="font-normal text-[18px] leading-[31px] text-center tracking-[-0.001em] md:[text-20px] mt-[20px]">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>
      <div className="w-full flex flex-col items-center md:hidden">
        <Image
          src={"/Testimonial.png"}
          alt="Image of client"
          width={318}
          height={290}
          loading="lazy"
        />

        <div className="text-center max-w-[80%]">
          <span className="flex">
            <QuoteIcon className="text-[20px]" fontSize={20} />
            This product has completely transformed how I manage my projects and
            deadlines
            <QuoteIcon />
          </span>
          <h4 className="font-normal text-[16px] leading-[26px] mt-[20px]">
            Talia Taylor
          </h4>
          <p className="font-normal text-[14px] text-white/70 mt-[10px]">
            Digital Marketing Director @ Quantum
          </p>
        </div>
      </div>
      <div className="relative w-full hidden md:block">
        <Image
          src={"/Testimonial-wide.png"}
          alt="Image of client"
          width={1485}
          height={335}
          className="w-full"
          loading="lazy"
        />

        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-max max-w-[60%] backdrop-blur-lg p-4 rounded-[10px] transition-all">
          <span className="flex font-medium lg:text-[23px] leading-[31px]">
            <QuoteIcon />
            This product has completely transformed how I manage my projects and
            deadlines.
            <QuoteIcon />
          </span>
          <h4 className="font-normal text-[16px] leading-[26px] mt-[20px] md:mt-[10px]">
            Talia Taylor
          </h4>
          <p className="font-normal text-[14px] text-white/70 mt-[10px] md:mt-[5px]">
            Digital Marketing Director @ Quantum
          </p>
        </div>
      </div>
      <div className="absolute bottom-20 left-0 h-[200px] w-[200px] md:top-1/2 bg-[#8C45FF]/50 blur-[100px] -z-10" />
    </section>
  );
};

export default Testimonials;
