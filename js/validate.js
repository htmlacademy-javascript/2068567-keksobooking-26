const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--error'
});

//валидация вместимости в зависимсоти от количества комнат
const capacity = adForm.querySelector('#capacity');
const rooms = adForm.querySelector('#room_number');
let roomSelected = rooms.querySelector('option:checked');

const maxCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const validateCapacity = (capacityValue) => maxCapacity[roomSelected.value].includes(capacityValue);

const getCapacityErrorMessage = () => {
  const CapacityArray = maxCapacity[roomSelected.value];
  const maxCapacityInt = Math.max(...CapacityArray);
  if (CapacityArray.includes(0)) {
    return 'Не для гостей';
  }
  if ((maxCapacityInt % 10) === 1) {
    return `До ${maxCapacityInt} гостя`;
  }
  return `До ${maxCapacityInt} гостей`;
};

pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

//проверка формы перед отправкой
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


