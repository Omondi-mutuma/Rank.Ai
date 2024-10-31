"use client";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full min-h-screen -z-50 overflow-hidden">
        <svg
          width="900"
          height="900"
          viewBox="0 0 1032 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-40 left-0 w-full h-full animate-ping spin"
        >
          <g opacity="0.3">
            <circle opacity="0.1" cx="516" cy="516" r="515.5" stroke="white" />
            <circle
              opacity="0.15"
              cx="516"
              cy="516"
              r="399.373"
              stroke="white"
              strokeDasharray="4 4"
            />
            <circle opacity="0.2" cx="516" cy="516" r="282.15" stroke="white" />
            <circle cx="177.478" cy="127.083" r="10.4554" stroke="#4D3763" />
            <circle
              cx="177.478"
              cy="127.083"
              r="3.88217"
              fill="#2A193C"
              stroke="#4D3763"
            />
          </g>
        </svg>
      </div>
      <Hero />
      <Clients />
      <Features />
      <Integrations />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  );
}
