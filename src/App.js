import { useState, useEffect } from 'react';
import fetchCharData, { fetchCharAvatars } from './utilities/fetchData';
import Header from './components/Header';
import Main from './components/Main';
import Leaderboard from './components/Leaderboard';

function App() {
  const [characters, setCharacters] = useState([]);
  const [avatarUrls, setAvatarUrls] = useState([]);
  const [stopwatchRunning, setStopwatchRunning] = useState(true);
  const [time, setTime] = useState(0);
  const [showLeaderBoard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    fetchCharData(setCharacters);
  }, []);

  useEffect(() => {
    fetchCharAvatars(characters, setAvatarUrls);
  }, [characters]);

  const restart = () => {
    setCharacters([]);
    setAvatarUrls([]);
    setStopwatchRunning(true);
    setTime(0);
    fetchCharData(setCharacters);
  };

  return (
    <div className="h-screen bg-gray-100">
      <Header
        characters={characters}
        avatarUrls={avatarUrls}
        stopwatchRunning={stopwatchRunning}
        time={time}
        setTime={setTime}
      />
      {!showLeaderBoard ? (
        <Main
          characters={characters}
          setCharacters={setCharacters}
          avatarUrls={avatarUrls}
          setStopwatchRunning={setStopwatchRunning}
          time={time}
          restart={restart}
          setShowLeaderboard={setShowLeaderboard}
        />
      ) : (
        <Leaderboard />
      )}
    </div>
  );
}

export default App;
