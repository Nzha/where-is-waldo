import { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { database, storage } from './utilities/firebase';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [characters, setCharacters] = useState([]);
  const [avatarUrls, setAvatarUrls] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');
  const [stopwatchRunning, setStopwatchRunning] = useState(true);

  // Retrieve characters' data from database
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

        // Select two random characters from the characterList array
        const randomIndices = [];
        while (randomIndices.length < 3) {
          const randomIndex = Math.floor(Math.random() * characterList.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
        const randomChars = [
          characterList[randomIndices[0]],
          characterList[randomIndices[1]],
          characterList[randomIndices[2]],
        ];
        setCharacters(randomChars);
      }
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const logoRef = storageRef(storage, 'wheres-waldo-logo.png');
        const avatarRefs = characters.map((character) =>
          storageRef(storage, `avatars/${character.name}.png`)
        );
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
  }, [characters]);

  return (
    <div>
      <Header
        characters={characters}
        logoUrl={logoUrl}
        avatarUrls={avatarUrls}
        stopwatchRunning={stopwatchRunning}
      />
      <Main
        characters={characters}
        setCharacters={setCharacters}
        avatarUrls={avatarUrls}
        setStopwatchRunning={setStopwatchRunning}
      />
    </div>
  );
}

export default App;
