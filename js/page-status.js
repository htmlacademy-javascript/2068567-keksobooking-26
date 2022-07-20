const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const slider = form.querySelector('.ad-form__slider');
const mapFilters = document.querySelector('.map__filters');
const mapFilterSelects = mapFilters.querySelectorAll('select');

const addAttributeDisabled = (elements) => {
  elements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const removeAttributeDisabled = (elements) => {
  elements.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

const addClassDisabled = (element) => {
  const classDisabled = 'ad-form--disabled';
  element.classList.add(classDisabled);
};

const removeClassDisabled = (element) => {
  const classDisabled = 'ad-form--disabled';
  element.classList.remove(classDisabled);
};

const inactiveForm = () => {
  addClassDisabled(form);
  addClassDisabled(mapFilters);
  slider.setAttribute('disabled', 'disabled');
  addAttributeDisabled(formFieldsets);
  addAttributeDisabled(mapFilterSelects);
};

const activeForm = () => {
  removeClassDisabled(form);
  removeClassDisabled(mapFilters);
  slider.removeAttribute('disabled');
  removeAttributeDisabled(formFieldsets);
  removeAttributeDisabled(mapFilterSelects);
};

export {activeForm, inactiveForm};
