"use client";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="px-[20px] md:px-[80px] lg:[100px] min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col justify-center items-center">
        <div className="w-full h-full">
          <svg
            width="1032"
            height="900"
            viewBox="0 0 1032 970"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden absolute -top-3/4 left-1/2 transform -translate-x-1/2 translate-y-3/4 lg:block"
          >
            <g opacity="0.3">
              <circle
                opacity="0.1"
                cx="516"
                cy="516"
                r="515.5"
                stroke="white"
              />
              <circle
                opacity="0.15"
                cx="516"
                cy="516"
                r="399.373"
                stroke="white"
                strokeDasharray="4 4"
              />
              <circle
                opacity="0.2"
                cx="516"
                cy="516"
                r="282.15"
                stroke="white"
              />
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
          <svg
            width="1032"
            height="970"
            viewBox="0 0 1032 970"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full absolute -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:hidden"
          >
            <g opacity="0.3">
              <circle
                opacity="0.1"
                cx="516"
                cy="516"
                r="515.5"
                stroke="white"
              />
              <circle
                opacity="0.15"
                cx="516"
                cy="516"
                r="399.373"
                stroke="white"
                strokeDasharray="4 4"
              />
              <circle
                opacity="0.2"
                cx="516"
                cy="516"
                r="282.15"
                stroke="white"
              />
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
      </main>

      <footer className="p-4 text-center">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}
