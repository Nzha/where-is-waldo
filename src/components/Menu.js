import capitalize from '../utilities/capitalizeString';

function Menu({
  x,
  y,
  menuX,
  menuY,
  setShowMenu,
  characters,
  setCharacters,
  displayAlert,
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
      setCharacters(newCharacters);
      displayAlert(`${capitalize(name)} found!`, 'success');
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
            // className="rounded border-2 border-black bg-white bg-opacity-80 px-4 py-1 hover:scale-105 hover:bg-opacity-100"
            className="rounded border-2 border-black bg-gray-700 bg-opacity-80 px-4 py-1 hover:scale-105 hover:bg-opacity-100 text-[#FCE44D] font-semibold"
            onClick={() => handleClick(name, location)}
          >
            <div></div>
            <div>{capitalize(name)}</div>
          </li>
        ))}
    </ul>
  );
}

export default Menu;
