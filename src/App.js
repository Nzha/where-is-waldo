import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './utilities/firebase';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [characters, setCharacters] = useState([]);
  const [foundAvatarStyle, setFoundAvatarStyle] = useState(null);

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

  return (
    <div>
      <Header foundAvatarStyle={foundAvatarStyle} />
      <Main
        setFoundAvatarStyle={setFoundAvatarStyle}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  );
}

export default App;
