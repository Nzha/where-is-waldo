import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../utilities/firebase';

function Header({ foundAvatarStyle }) {
  const [logoUrl, setLogoUrl] = useState('');
  const [avatarUrls, setAvatarUrls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const logoRef = ref(storage, 'wheres-waldo-logo.png');
        const avatarRefs = [ref(storage, 'avatars/waldo.png')];
        const [logoUrl, ...avatarUrls] = await Promise.all([
          getDownloadURL(logoRef),
          ...avatarRefs.map(getDownloadURL),
        ]);
        setLogoUrl(logoUrl);
        setAvatarUrls(avatarUrls);
      } catch (error) {
        console.log('Error fetching images:', error);
      }
    }
    fetchData();
  }, []);

  const extractNameFromUrl = (url) => {
    const startIndex = url.indexOf('%2F') + 3;
    const endIndex = url.indexOf('.png');
    const name = url.substring(startIndex, endIndex);
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return nameCapitalized;
  };

  return (
    <header className="sticky top-0 flex justify-around bg-gray-700 py-2 text-white">
      {logoUrl && (
        <div>
          <img className="h-14" src={logoUrl} alt="Logo" />
        </div>
      )}
      <div className="flex items-center">
        {avatarUrls.map((url, index) => (
          <div
            key={index}
            className="flex flex-col items-center pr-6"
            style={foundAvatarStyle}
          >
            {url && (
              <img
                className="h-10 w-10 object-contain"
                src={url}
                alt={`Avatar ${index}`}
              />
            )}
            <p className="text-sm font-bold">{extractNameFromUrl(url)}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
