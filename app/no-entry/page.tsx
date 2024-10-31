"use client";
import { useEffect, useState } from "react";

const WaitlistFull: React.FC = () => {
  // Countdown timer state
  const [days, setDays] = useState(30);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    // Countdown logic
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(interval); // Stop countdown when time is up
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [days, hours, minutes, seconds]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center ">
      <h1 className="text-6xl font-bold text-gray-800">Not Eligible</h1>
      <p className="mt-4 text-xl text-gray-600">
        Our trial period is ONLY for users on the waitlist! Retry in{" "}
        <span className="font-semibold text-blue-600">{days} days</span>,{" "}
        <span className="font-semibold text-blue-600">{hours} hours</span>,{" "}
        <span className="font-semibold text-blue-600">{minutes} minutes</span>,
        and{" "}
        <span className="font-semibold text-blue-600">{seconds} seconds</span>.
      </p>
      <p className="mt-6 text-gray-500">
        We appreciate your interest and hope to see you soon!
      </p>
      <div className="mt-10 p-5 border-2 border-blue-600 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Countdown</h2>
        <div className="flex justify-center mt-4 text-4xl">
          <div className="flex flex-col items-center mx-4">
            <span className="font-bold text-blue-600">{days}</span>
            <span className="text-sm text-gray-500">Days</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <span className="font-bold text-blue-600">{hours}</span>
            <span className="text-sm text-gray-500">Hours</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <span className="font-bold text-blue-600">{minutes}</span>
            <span className="text-sm text-gray-500">Minutes</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <span className="font-bold text-blue-600">{seconds}</span>
            <span className="text-sm text-gray-500">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistFull;
