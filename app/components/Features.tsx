/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import BentoItem from "./ui/BentoItem";

const Features: React.FC = () => {
  // Simulating loading state
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Simulate fetching features
    const fetchFeatures = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Set loading to false after fetching
        setLoading(false);
      } catch (err) {
        setError("Failed to load features.");
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className="w-full py-[80px] flex flex-col items-center gap-[31px]">
      <div className="text-center max-w-[555px]">
        <h2 className="font-medium text-[26px] leading-[38px] tracking-[-0.001]">
          Harness the power of AI, making search engine optimization intuitive
          and effective for all skill levels.
        </h2>
      </div>
      {loading ? (
        <div className="text-center">Loading features...</div> // Loading state
      ) : error ? (
        <div className="text-center text-red-500">{error}</div> // Error handling
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[10px]">
          <BentoItem /> {/* Pass features to BentoItem */}
        </div>
      )}
    </section>
  );
};

export default Features;
