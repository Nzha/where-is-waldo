import { ref, onValue } from 'firebase/database';
import { database } from '../utilities/firebase';

function Menu({ x, y, menuX, menuY, setShowMenu, setStyle }) {
  const handleClick = () => {
    // Retrieve character location from database and check against clicked coords
    const characterRef = ref(database, 'characters/waldo/location');
    onValue(characterRef, (snapshot) => {
      const data = snapshot.val();
      checkCoords(data);
    });
  };

  const checkCoords = (coords) => {
    if (
      x > coords.xMin &&
      x < coords.xMax &&
      y > coords.yMin &&
      y < coords.yMax
    ) {
      console.log('Waldo found!');
      setStyle({ opacity: 0.2 });
      setShowMenu(false);
    } else {
      console.log('Keep looking');
      setShowMenu(false);
    }
  };

  return (
    <div
      className="fixed z-50 cursor-pointer rounded bg-white bg-opacity-80 px-4 py-2 shadow-lg hover:scale-105 hover:bg-opacity-100"
      style={{ top: menuY + 10, left: menuX + 5 }}
      onClick={handleClick}
    >
      Waldo
    </div>
  );
}

export default Menu;
