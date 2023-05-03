import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../utilities/firebase';

function Header({ foundAvatarStyle }) {
  const [waldoImgUrl, setWaldoImgUrl] = useState(null);

  useEffect(() => {
    const waldoAvatar = ref(storage, 'avatars/waldo.png');
    getDownloadURL(waldoAvatar).then((url) => {
      setWaldoImgUrl(url);
    });
  }, []);

  return (
    <header className="sticky top-0 flex justify-around bg-gray-700 py-2 text-white">
      <div>Logo</div>
      <div className="flex items-center">
        <div className="flex flex-col items-center pr-6" style={foundAvatarStyle}>
          <img
            className="h-10 w-10 object-contain"
            src={waldoImgUrl}
            alt="waldo"
          />
          <p className="text-sm font-bold">Waldo</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
