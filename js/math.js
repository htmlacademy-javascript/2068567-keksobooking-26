// Возращает случайное целое число из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInt = (min, max) => {
  if (min > max) {
    return getRandomInt(max, min);
  }
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль

const getRandomFloat = (min, max, amount) => {
  if (min > max) {
    return getRandomFloat(max, min, amount);
  }
  const range = (Math.random() * (max - min)) + min;
  return Number(range.toFixed(amount));
};

export {getRandomInt, getRandomFloat};
