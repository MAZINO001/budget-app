/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

function PrintEveryMinute() {
  const messageRef = useRef(null);
  const [currentTime, setcurrentTime] = useState(new Date());

  console.log(currentTime);

  useEffect(() => {
    const MINUTE_IN_MS = 60000;

    const interval = setInterval(() => {
      console.log("hi its been a minute");
    }, MINUTE_IN_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={messageRef}>This message updates every minute (in console).</div>
  );
}

export default PrintEveryMinute;
