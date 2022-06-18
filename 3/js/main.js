// Возращает случайное целое число из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt (min, max) {
  if (min > max) {
    return getRandomInt(max, min);
  }
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль

function getRandomFloat (min, max, amount) {
  if (min > max) {
    return getRandomFloat(max, min, amount);
  }
  const range = (Math.random() * (max - min)) + min;
  return Number(range.toFixed(amount));
}

const AVATARS_INDEX = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

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

function getRandomArrayElement (array) {
  return array[getRandomInt (0, array.length - 1)];
}

// Неповторяющийся элемент массива

function getNoRepeatElement (array) {
  for (let i = 0; i <= array.length - 1; i++) {
    const element = array[i];
    array.push(array[i]);
    array.splice(i, 1);
    return element;
  }
}

// Массив случайной длины без повторения значений

function getRandomLength (array) {
  for (let i = 0; i <= array.length - 1; i++) {
    array.push(array[i]);
    array.splice(i, 1);
  }
  const radnomLength = array.slice(getRandomInt(0, array.length - 1));
  return radnomLength;
}

//Генерация офера

function createOffer () {
  return { author: {
    avatar: `img/avatars/user${getNoRepeatElement(AVATARS_INDEX)}.png`
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
    features: getRandomLength(FEATURES),
    description: getRandomArrayElement(OFFER_DESCRIPTIONS),
    photos: getRandomLength(PHOTOS),
  },

  location: {
    lat: getRandomFloat (35.65, 35.7, 5),
    lng: getRandomFloat (139.7, 139.8, 5)
  }
  };
}

const similarOffers = Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);

