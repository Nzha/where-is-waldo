import { useEffect } from 'react';

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

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="text-4xl">
      <div>{formatTime(time)}</div>
    </div>
  );
}

export default Stopwatch;
