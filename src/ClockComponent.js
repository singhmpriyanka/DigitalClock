import { useEffect, useState } from "react";

export default function ClockComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervals = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervals);
    };
  }, []);

  function formatTimer() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours > 12 ? "PM" : "AM";
    return `${appZero(hours)}: ${appZero(minutes)}: ${appZero(
      seconds
    )} ${meridiem}`;
  }

  function appZero(num) {
    return num < 10 ? "0" + num : "" + num;
  }

  return (
    <>
      <div className="clock">{formatTimer()}</div>
      <footer className="footer">
        {new Date().getFullYear()} My Company. All rights reserved.
      </footer>
    </>
  );
}
