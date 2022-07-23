const sliderElement = document.querySelector('.ad-form__slider');
const prices = document.querySelector('#price');

//настройка слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: prices.placeholder,
  step: 100,
  connect: 'lower',
  format: {
    to: function(value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

//изменение цены при ручном перемещении бегунка слайдера
sliderElement.noUiSlider.on('slide', () => {
  prices.value = sliderElement.noUiSlider.get();
});

//перемещение бегунка при ручном измненении цены
prices.addEventListener('input', () => {
  sliderElement.noUiSlider.set(prices.value);
});
