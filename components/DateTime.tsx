import { useEffect, useState } from "react";

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

const TIME_FORMAT = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const DateTime = (): JSX.Element => {
  const [{ date, time }, setDateTime] = useState({
    date: DATE_FORMAT.format(Date.now()),
    time: TIME_FORMAT.format(Date.now()),
  });
  const [pageLoadTime, setPageLoadTime] = useState(0);

  useEffect(() => {
    setPageLoadTime(
      window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.navigationStart
    );

    const interval = setInterval(() => {
      const now = Date.now();
      setDateTime({
        date: DATE_FORMAT.format(now),
        time: TIME_FORMAT.format(now),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="date-time">
      <h3 className="date">{date}</h3>
      <h1 className="time">{time}</h1>
      <h3 className="page-load">Page load time: {pageLoadTime} MS</h3>
    </div>
  );
};

export default DateTime;
