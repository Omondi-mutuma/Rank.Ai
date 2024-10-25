"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="px-[20px] md:px-[80px] lg:[100px] min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col justify-center items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={"/mobile-circles-bg.png"}
            alt=""
            width={390}
            height={565}
          />
        </div>
        <Hero />
      </main>

      <footer className="p-4 text-center">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}
