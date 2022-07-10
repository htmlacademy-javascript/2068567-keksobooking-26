import {getRandomArrayElement, getRandomLengthSlice, fixedLengthString, getRandomSlice} from './util.js';
import {getRandomInt, getRandomFloat} from './math.js';

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

const similarOffers = () => Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);

export {similarOffers};
