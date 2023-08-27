type getReadingTimeProps = (
  wordCount: number,
  options: { wordsPerMinute: number }
) => string;

export const getReadingTime: getReadingTimeProps = (wordCount, options) => {
  const { wordsPerMinute } = options;
  const minutes = wordCount / wordsPerMinute;
  const seconds = minutes * 60;
  const timeInSeconds = Math.floor(parseFloat(seconds.toFixed(2)));
  const timeInMinutes = Math.ceil(parseFloat(minutes.toFixed(2)));

  if (seconds < 1) {
    return `0 sec read`;
  } else if (seconds >= 1 && seconds < 60) {
    return `${timeInSeconds} sec read`;
  } else {
    return `${timeInMinutes} min read`;
  }
};
