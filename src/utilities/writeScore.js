import { ref, push } from 'firebase/database';
import { database } from './firebase';

function writeScore(player, score) {
  push(ref(database, 'scores'), {
    name: player,
    score: score,
  });
}

export default writeScore;
