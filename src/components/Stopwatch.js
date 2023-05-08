import { useEffect } from 'react';
import formatTime from '../utilities/formatTime';

function Stopwatch({ stopwatchRunning, time, setTime }) {
  useEffect(() => {
    let intervalId;
    if (stopwatchRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [stopwatchRunning]);

  return (
    <div className="text-4xl">
      <div>{formatTime(time)}</div>
    </div>
  );
}

export default Stopwatch;
