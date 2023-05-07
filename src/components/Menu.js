function Menu({ x, y, menuX, menuY, setShowMenu, characters, setCharacters, displayAlert }) {
  const handleClick = (name, coords) => {
    const characterIndex = characters.findIndex((char) => char.name === name);
    if (
      x > coords.xMin &&
      x < coords.xMax &&
      y > coords.yMin &&
      y < coords.yMax
    ) {
      console.log('Character found!');
      const newCharacters = [...characters];
      newCharacters[characterIndex] = {
        ...newCharacters[characterIndex],
        found: true,
      };
      setCharacters(newCharacters);
      console.table(characters);
    } else {
      displayAlert('Keep looking', 'error')
      console.log('Keep looking');
      console.table(characters);
    }
    setShowMenu(false);
  };

  return (
    <ul
      className="fixed z-50 cursor-pointer shadow-lg"
      style={{ top: menuY + 10, left: menuX + 5 }}
    >
      {characters.map(({ name, location }) => (
        <li
          key={name}
          className="rounded border-2 border-black bg-white bg-opacity-80 px-4 py-1 hover:scale-105 hover:bg-opacity-100"
          onClick={() => handleClick(name, location)}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
