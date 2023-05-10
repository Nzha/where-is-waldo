import { useState, useEffect } from 'react';
import { fetchScores } from '../utilities/fetchData';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores(setScores);
  }, []);

  return (
    <div>
      {scores.map((score, index) => (
        <div key={index}>{score.name}</div>
      ))}
    </div>
  );
}

export default Leaderboard;
