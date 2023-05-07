import extractNameFromUrl from '../utilities/extractNameFormUrl';
import Stopwatch from './Stopwatch';

function Header({ characters, logoUrl, avatarUrls, stopwatchRunning }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-around bg-gray-700 py-2 text-white">
      {logoUrl && (
        <div>
          <img className="h-14" src={logoUrl} alt="Logo" />
        </div>
      )}
      <Stopwatch stopwatchRunning={stopwatchRunning} />
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
