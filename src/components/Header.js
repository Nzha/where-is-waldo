import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../utilities/firebase';

function Header({ style }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const waldoAvatar = ref(storage, 'avatars/waldo.png');
    getDownloadURL(waldoAvatar).then((url) => {
      setImageUrl(url);
    });
  }, []);

  return (
    <header className="sticky top-0 flex justify-around bg-[#5a5a5a] py-2 text-white">
      <div>Logo</div>
      <div className="flex items-center">
        <div className="flex flex-col items-center pr-6" style={style}>
          <img
            className="h-10 w-10 object-contain"
            src={imageUrl}
            alt="waldo"
          />
          <p className="text-sm font-bold">Waldo</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
