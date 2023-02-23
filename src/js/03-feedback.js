import throttle from 'lodash.throttle';
import storage from './storage';
const { save, load } = storage;

formRef = document.querySelector('.feedback-form');

let formData = {};
const STORAGE_KEY = 'feedback-form-state';
const formDataParse = load(STORAGE_KEY);

if (formDataParse) {
  formData = formDataParse;
  setFormValue(formData, formRef);
}

formRef.addEventListener('input', throttle(writeDataLocalStorage, 500));
formRef.addEventListener('submit', onButtonSubmit);

function writeDataLocalStorage(evt) {
  formData[evt.target.name] = evt.target.value;
  save(STORAGE_KEY, formData);
}

function setFormValue(obj, form) {
  for (const key in obj) {
    form.elements[key].value = obj[key];
  }
}

function onButtonSubmit(evt) {
  evt.preventDefault();
  const formDataParse = load(STORAGE_KEY);
  console.log(formDataParse);
  localStorage.removeItem(STORAGE_KEY);
  evt.target.reset();
}
