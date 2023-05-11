import { useState, useEffect } from 'react';
import { fetchScores } from '../utilities/fetchData';
import Table from './Table';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores(setScores);
  }, []);

  return (
    <Table>
      {scores
        .sort((a, b) => a.score - b.score)
        .map((score, index) => (
          <tr
            key={index}
            className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
          >
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              {index}
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
              {score.name}
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
              {score.score}
            </td>
          </tr>
        ))}
    </Table>
  );
}

export default Leaderboard;
