export const formatTime = (time: number) => {
  const getMinutes = `0${Math.floor((time / 60) % 60)}`.slice(-2);
  const getSeconds = `0${time % 60}`.slice(-2);
  return `${getMinutes}:${getSeconds}`;
};
