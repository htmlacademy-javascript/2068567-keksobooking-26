import {getRandomInt} from './math.js';

// Случайный элемент массива

const getRandomArrayElement = (array) => array[getRandomInt (0, array.length - 1)];

// Перемешанный массив случайной длины

const getRandomLengthSlice = (array) => array.slice(0, getRandomInt(0, array.length));

const shuffleArray = (array) => {
  const results = [];
  const elements = [...array];  // копия входного массива которую будем изменять
  for (let i = 0; i < array.length; i++) {
    const randomElementIndex = getRandomInt(0, elements.length - 1);
    const [pluckedRandomElement] = elements.splice(randomElementIndex, 1); // splice возвращает массив из одного элемента, используем декструктуризацию
    results.push(pluckedRandomElement);
  }
  return results;
};

const getRandomSlice = (array) => {
  const shuffledElements = shuffleArray(array);

  return getRandomLengthSlice(shuffledElements);
};

//Число с ведущим нулем

const fixedLengthString = (str, filler, length) => {
  const chars = String(str).split('');
  const template = Array.from({length}, () => filler);

  return [...template, ...chars].join('').slice(-length);
};

export {getRandomArrayElement, getRandomLengthSlice, fixedLengthString, getRandomSlice};
