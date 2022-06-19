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

const OFFER_TITLES = ['Заголовок объявления'];

const OFFER_DESCRIPTIONS = ['Описание объявления'];

const TYPES_OF_HOUSES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIME = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_OFFERS_COUNT = 10;

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

//Генерация офера

const createOffer = (_, index) => ({
  author: {
    avatar: `img/avatars/user${fixedLengthString(index + 1, '0', 2)}.png`
  },
  offer: {
    title: getRandomArrayElement(OFFER_TITLES),
    address: `${getRandomFloat (35.65, 35.7, 5)}, ${getRandomFloat (139.7, 139.8, 5)}`,
    price: getRandomInt (0, 100000),
    type: getRandomArrayElement(TYPES_OF_HOUSES),
    rooms: getRandomInt (1, 100),
    guests: getRandomInt (1, 3),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomSlice(FEATURES),
    description: getRandomArrayElement(OFFER_DESCRIPTIONS),
    photos: getRandomLengthSlice(PHOTOS),
  },

  location: {
    lat: getRandomFloat (35.65, 35.7, 5),
    lng: getRandomFloat (139.7, 139.8, 5)
  }
});

const similarOffers = Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);
