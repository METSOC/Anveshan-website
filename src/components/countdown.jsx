import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span
        key={interval}
        className="lg:text-2xl text-sm sm:text-2xl md:text-2xl xl:text-3xl 2xl:text-3xl"
      >
        {timeLeft[interval]} {interval.toUpperCase()}
        {index < Object.keys(timeLeft).length - 1 && " : "}{" "}
        {/* Add colon if it's not the last interval */}
      </span>
    );
  });

  return <div className="text-white font-jost">{timerComponents}</div>;
};

export default CountdownTimer;
