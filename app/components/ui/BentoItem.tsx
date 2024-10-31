import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imgPath,
  imgWidth,
  imgHeight,
  icon,
  hasBackground,
}: {
  imgWidth: number;
  imgHeight: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgPath?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  hasBackground?: boolean;
}) => {
  return (
    <div
      className={`
        row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4  border border-white/15 justify-between flex flex-col space-y-4
        ${className} ${
        hasBackground ? (
          <div className="absolute top-0 left-0 h-full w-full bg-white" />
        ) : (
          ""
        )
      }`}
    >
      {imgPath && (
        <Image src={imgPath} alt="" width={imgWidth} height={imgHeight} />
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
      {}
    </div>
  );
};
