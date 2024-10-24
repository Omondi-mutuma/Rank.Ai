"use client";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="px-[40px] md:px-[100px] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
        {/* Add your main content here */}
      </main>

      <footer className="p-4 text-center">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}
