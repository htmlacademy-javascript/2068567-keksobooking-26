import {createOffer} from './comparison-offer.js';
import {activeForm} from './page-status.js';

//настройка карты
const map = L.map('map-canvas')
  .on('load', () => {
    activeForm();
  })
  .setView({
    lat: 35.65906,
    lng: 139.70067,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//добавление и настройка основного маркера
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.65906,
    lng: 139.70067,
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainPinMarker.addTo(map);

//связь основного маркера c полем Адрес
const address = document.querySelector('#address');

const addressValueDeafault = () => {
  const {lat, lng} = mainPinMarker._latlng;
  address.value = `${lat} ${lng}`;
};

mainPinMarker.on('moveend', (evt) => {
  const AMOUNT = 5;
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(AMOUNT)} ${lng.toFixed(AMOUNT)}`;
});

//создание слоя на карте
const markerGroup = L.layerGroup().addTo(map);

//добавление и настройка маркеров с предложением
const offerPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createOfferMarker = (offers) => {

  offers.forEach((offer) => {
    const lat = offer.location.lat;
    const lng = offer.location.lng;

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        offerPinIcon,
      },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(createOffer(offer));
  });
};

export {addressValueDeafault, createOfferMarker};
