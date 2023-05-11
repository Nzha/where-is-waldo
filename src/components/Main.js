import { useState, useEffect, useRef } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../utilities/firebase';
import Menu from './Menu';
import Alert from './Alert';
import ModalGameOver from './ModalGameOver';

function Main({
  characters,
  setCharacters,
  avatarUrls,
  setBgImgLoaded,
  setStopwatchRunning,
  time,
  restart,
  setShowLeaderboard,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [clickedLocation, setClickedLocation] = useState(null);
  const [bgImageUrl, setBgImageUrl] = useState('');
  const imageRef = useRef(null);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  // Get background image from database
  useEffect(() => {
    const bgImage = ref(storage, 'IntenseWaldo.jpg');
    getDownloadURL(bgImage).then((url) => {
      setBgImageUrl(url);
      setBgImgLoaded(true);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // Calculate clicked coords irregardless of the screen size
    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = imageRef?.current?.naturalWidth / rect?.width;
    const scaleY = imageRef?.current?.naturalHeight / rect?.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    setClickedLocation({ x, y });
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowMenu(!showMenu);
    // console.log(`x: ${x}, y: ${y}`);
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

  const displayAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
  };

  // Remove alert message after 3 seconds
  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <div>
      <img
        src={bgImageUrl}
        alt="gameImage"
        onClick={handleClick}
        ref={imageRef}
      />
      {showAlert && <Alert message={alertMessage} type={alertType} />}
      {showMenu && (
        <Menu
          x={clickedLocation.x}
          y={clickedLocation.y}
          menuX={menuPosition.x}
          menuY={menuPosition.y}
          setShowMenu={setShowMenu}
          characters={characters}
          setCharacters={setCharacters}
          displayAlert={displayAlert}
          avatarUrls={avatarUrls}
          setStopwatchRunning={setStopwatchRunning}
          openModal={openModal}
        />
      )}
      <ModalGameOver
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        openModal={openModal}
        time={time}
        restart={restart}
        setShowLeaderboard={setShowLeaderboard}
      />
    </div>
  );
}

export default Main;
