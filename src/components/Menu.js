import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../utilities/firebase';

function Menu({ x, y, menuX, menuY, setShowMenu, setFoundAvatarStyle }) {
  // Retrieve character data from database
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const charactersRef = ref(database, 'characters');
    onValue(charactersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const characterList = Object.entries(data).map(
          ([name, { location }]) => ({
            name,
            location,
          })
        );
        setCharacters(characterList);
      }
    });
  }, []);

  const handleClick = (coords) => {
    if (
      x > coords.xMin &&
      x < coords.xMax &&
      y > coords.yMin &&
      y < coords.yMax
    ) {
      console.log('Character found!');
      setFoundAvatarStyle({ opacity: 0.4 });
    } else {
      console.log('Keep looking');
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
          onClick={() => handleClick(location)}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
