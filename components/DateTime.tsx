import { useEffect, useState } from "react";
import { DATE_FORMAT, TIME_FORMAT } from "../util/dateTimeUtils";

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
    <div className="first-letter:">
      <div className="flex gap-2">
        <h3 className="date uppercase">{date}</h3>
        {/* <h1 className="time">{time}</h1> */}
      </div>
      {/*   <h3 className="page-load">Page load time: {pageLoadTime} MS</h3> */}
    </div>
  );
};

export default DateTime;
