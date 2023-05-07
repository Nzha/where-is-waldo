import { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { database, storage } from './utilities/firebase';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [characters, setCharacters] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');
  const [avatarUrls, setAvatarUrls] = useState([]);

  // Retrieve character data from database
  useEffect(() => {
    const charactersRef = ref(database, 'characters');
    onValue(charactersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const characterList = Object.entries(data).map(
          ([name, { location }]) => ({
            name,
            location,
            found: false,
          })
        );
        setCharacters(characterList);
      }
    });
  }, []);

  // Retrieve characters' avatar from storage
  useEffect(() => {
    async function fetchData() {
      try {
        const logoRef = storageRef(storage, 'wheres-waldo-logo.png');
        const avatarRefs = [
          storageRef(storage, 'avatars/waldo.png'),
          storageRef(storage, 'avatars/joker.png'),
          storageRef(storage, 'avatars/hawkeye.png'),
        ];
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

  return (
    <div>
      <Header
        characters={characters}
        logoUrl={logoUrl}
        avatarUrls={avatarUrls}
      />
      <Main characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default App;
