import {createOffer} from './comparison-offer.js';
import {similarOffers} from './data.js';

const canvas = document.querySelector('#map-canvas');
const similarOffer = similarOffers();
const card = createOffer(similarOffer[0]);

canvas.append(card);
//console.log(card);
