// Display 00:00:00
function formatTime(time) {
  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Display hours and minutes only when necessary
function formatTimeMin(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds % 60;

  const timeArray = [];

  if (hours > 0) {
    timeArray.push(hours + 'h');
  }

  if (minutes > 0) {
    timeArray.push(minutes + 'm');
  }

  if (remainingSeconds > 0 || timeArray.length === 0) {
    timeArray.push(remainingSeconds + 's');
  }

  return timeArray.join(' ');
}

export { formatTime as default, formatTimeMin };
