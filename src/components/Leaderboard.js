import { useState, useEffect } from 'react';
import { fetchScores } from '../utilities/fetchData';
import Table from './Table';
import formatTime from '../utilities/formatTime';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores(setScores);
  }, []);

  return (
    <div>
      <div className="flex justify-center pb-4 pt-8 text-4xl">Leaderboard</div>
      <Table>
        {scores.map((score, index) => (
          <tr
            key={index}
            className="border-b bg-white transition duration-300 ease-in-out hover:border hover:border-gray-200 hover:bg-gray-100"
          >
            <td className="whitespace-nowrap px-14 py-4 text-sm font-medium text-gray-900">
              {index + 1}
            </td>
            <td className="whitespace-nowrap px-14 py-4 text-sm font-light text-gray-900">
              {score.name}
            </td>
            <td className="whitespace-nowrap px-14 py-4 text-sm font-light text-gray-900">
              {formatTime(score.score)}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default Leaderboard;
