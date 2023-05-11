import { onValue, ref } from 'firebase/database';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { database, storage } from './firebase';

const fetchCharData = (setCharacters) => {
  // Fetch characters' data from database
  const charactersRef = ref(database, 'characters');
  onValue(
    charactersRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const characterList = Object.entries(data).map(
          ([name, { location }]) => ({ name, location, found: false })
        );
        // Select 3 random characters from the characterList array
        const [a, b, c] = characterList
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        // Update state variable (useState)
        setCharacters([a, b, c]);
      } else {
        console.log('No data available');
      }
    },
    (error) => {
      console.log('Error fetching data:', error);
    }
  );
};

const fetchCharAvatars = async (characters, setAvatarUrls) => {
  try {
    const avatarRefs = characters.map((character) =>
      storageRef(storage, `avatars/${character.name}.png`)
    );
    const avatarPromises = avatarRefs.map(getDownloadURL);
    const avatarUrls = await Promise.all(avatarPromises);
    setAvatarUrls(avatarUrls);
  } catch (error) {
    console.log('Error fetching images:', error);
  }
};

const fetchScores = (setScores) => {
  // Fetch characters' data from database
  const scoresRef = ref(database, 'scores');
  onValue(
    scoresRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const scoreList = Object.entries(data).map(([key, value]) => ({
          name: value.name,
          score: value.score,
        }));
        // Get the top 30 scores
        const sortedScoreList = scoreList
          .sort((a, b) => a.score - b.score)
          .slice(0, 30);
        setScores(sortedScoreList);
      } else {
        console.log('No data available');
      }
    },
    (error) => {
      console.log('Error fetching data:', error);
    }
  );
};

export { fetchCharData as default, fetchCharAvatars, fetchScores };
