import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoItem";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center gap-[40px] py-[40px]">
      <div className="text-center max-w-[555px]">
        <h2 className="font-medium text-[26px] leading-[38px] tracking-[-0.001]">
          Harness the power of AI, making search engine optimization intuitive
          and effective for all skill levels.
        </h2>
      </div>
      <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            imgPath={item.image}
            imgWidth={item.imgWidth}
            className={item.className}
            icon={item.icon}
            imgHeight={0}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );
const items = [
  {
    image: "/holo-star.svg",
    imgHeight: 2550,
    imgWidth: 2550,
    title: "SEO goal setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
    hasBackground: false,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    image: "/app-desktop.png",
    imgHeight: 652,
    imgWidth: 1098,
    title: "User-friendly dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
    hasBackground: true,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    image: "/app-wide-3x1.png",
    imgHeight: 354,
    imgWidth: 633,
    title: "Visual reports",
    description: "Visual insights into your sites performance.",
    hasBackground: true,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    image: "/3d-triangle.png",
    imgHeight: 244,
    imgWidth: 234,
    title: "Smart Keyword Generator",
    description: "Automatic suggestions and the best keywords to target.",
    hasBackground: false,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
