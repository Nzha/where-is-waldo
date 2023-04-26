import { useState, useEffect, useRef } from 'react';
import Menu from './Menu';

function Main() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [clickedLocation, setClickedLocation] = useState(null);
  const imageRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    // Calculate constant clicked coords irregardless of the screen size
    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = imageRef.current.naturalWidth / rect.width;
    const scaleY = imageRef.current.naturalHeight / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    setClickedLocation({ x, y });

    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (clickedLocation !== null) {
        setClickedLocation(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [clickedLocation]);

  return (
    <div>
      <img
        src="/images/intense-waldo.jpg"
        alt="gameImage"
        onClick={handleClick}
        ref={imageRef}
      />
      {showMenu && <Menu x={menuPosition.x} y={menuPosition.y} />}
    </div>
  );
}

export default Main;
