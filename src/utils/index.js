export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomValidNumber = (characters) => {
  if (characters.length === 826) return null;

  let id = 0;
  do {
    id = getRandomNumber(1, 826);
    // eslint-disable-next-line
  } while (characters.find((item) => item.id === id));

  return id;
};
