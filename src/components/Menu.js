import capitalize from '../utilities/capitalizeString';
import extractNameFromUrl from '../utilities/extractNameFormUrl';

function Menu({
  x,
  y,
  menuX,
  menuY,
  setShowMenu,
  characters,
  setCharacters,
  displayAlert,
  avatarUrls,
  setStopwatchRunning,
}) {
  const handleClick = (name, coords) => {
    const characterIndex = characters.findIndex((char) => char.name === name);
    if (
      x > coords.xMin &&
      x < coords.xMax &&
      y > coords.yMin &&
      y < coords.yMax
    ) {
      const newCharacters = [...characters];
      newCharacters[characterIndex] = {
        ...newCharacters[characterIndex],
        found: true,
      };
      const allFound = newCharacters.every((character) => character.found);
      setCharacters(newCharacters);
      displayAlert(`${capitalize(name)} found!`, 'success');
      if (allFound) {
        console.log('All found!');
        setStopwatchRunning(false);
      }
    } else {
      displayAlert('Keep looking', 'error');
    }
    setShowMenu(false);
  };

  return (
    <ul
      className="fixed z-50 cursor-pointer shadow-lg"
      style={{ top: menuY + 10, left: menuX + 5 }}
    >
      {characters
        .filter(({ found }) => !found)
        .map(({ name, location }) => (
          <li
            key={name}
            className="flex items-center gap-3 rounded border-2 border-black bg-gray-700 bg-opacity-90 px-4 py-1 font-semibold text-[#FCE44D] hover:scale-105 hover:bg-opacity-100"
            onClick={() => handleClick(name, location)}
          >
            <img
              className="h-8 w-8 object-contain"
              src={avatarUrls.find(
                (urlName) => extractNameFromUrl(urlName) === name
              )}
              alt="Avatar"
            />
            <div>{capitalize(name)}</div>
          </li>
        ))}
    </ul>
  );
}

export default Menu;
