import { useState, useEffect } from 'react';
import fetchCharData, { fetchCharAvatars } from './utilities/fetchData';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [characters, setCharacters] = useState([]);
  const [avatarUrls, setAvatarUrls] = useState([]);
  const [stopwatchRunning, setStopwatchRunning] = useState(true);
  const [time, setTime] = useState(0);

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
    <div>
      <Header
        characters={characters}
        avatarUrls={avatarUrls}
        stopwatchRunning={stopwatchRunning}
        time={time}
        setTime={setTime}
      />
      <Main
        characters={characters}
        setCharacters={setCharacters}
        avatarUrls={avatarUrls}
        setStopwatchRunning={setStopwatchRunning}
        time={time}
        restart={restart}
      />
    </div>
  );
}

export default App;
