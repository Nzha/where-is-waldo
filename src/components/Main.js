import { useState } from 'react';
import Menu from './Menu';

function Main() {
  const [showMenu, setShowMenu] = useState(false);

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <img
        src="/images/intense-waldo.jpg"
        alt="gameImage"
        onClick={handleClick}
      />
      {showMenu && <Menu x={menuPosition.x} y={menuPosition.y} />}
    </div>
  );
}

export default Main;
