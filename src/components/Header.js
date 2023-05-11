import extractNameFromUrl from '../utilities/extractNameFormUrl';
import Stopwatch from './Stopwatch';

function Header({
  characters,
  avatarUrls,
  stopwatchRunning,
  time,
  setTime,
  restart,
}) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-around bg-gray-700 py-3 text-white">
      <div
        className="cursor-pointer text-2xl font-bold leading-tight"
        onClick={restart}
      >
        <div className="text-orange-500">
          WHERE'S <span className="text-yellow-300">WALDO</span>
        </div>
        <div className="text-orange-500">
          & <span className="text-yellow-300">CIE</span>
        </div>
      </div>
      <Stopwatch
        stopwatchRunning={stopwatchRunning}
        time={time}
        setTime={setTime}
      />
      <div className="flex items-center">
        {avatarUrls.map((url, index) => (
          <div
            key={index}
            className="flex flex-col items-center pr-6"
            style={
              characters.find((char) => char.name === extractNameFromUrl(url))
                ?.found
                ? { opacity: 0.4 }
                : {}
            }
          >
            {url && (
              <img
                className="h-10 w-10 object-contain"
                src={url}
                alt={`Avatar ${index}`}
              />
            )}
            <p className="text-sm font-bold">{extractNameFromUrl(url, true)}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
