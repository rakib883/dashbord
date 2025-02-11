import React, { useState, useEffect } from "react";

const OfferCountdown = () => {
  // Fixed offer end time (14th February 2025) in Bangladesh Standard Time (UTC +6)
  const offerEndTime = new Date("2025-02-14T00:00:00+06:00").getTime();

  // Calculate time left based on current time in Bangladesh time
  const calculateTimeLeft = () => {
    const now = new Date().getTime(); // Get current time in UTC
    const difference = offerEndTime - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24) % 4)).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Limited Time Offer! Ends on 14th February 2025</h2>
      <div className="flex justify-center space-x-4 text-4xl font-semibold">
        <div>
          <span>{timeLeft.days}</span>
          <div className="text-sm">Days</div>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <div className="text-sm">Hours</div>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <div className="text-sm">Minutes</div>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCountdown;
