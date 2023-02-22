import throttle from 'lodash.throttle';

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email
//  и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка
//   "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
//  заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
//  message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//  Для этого добавь в проект и используй библиотеку lodash.throttle.

const refs = {
  form: document.querySelector('.feedback-form'),
  button: document.querySelector('button[type="submit"]'),
  email: document.querySelector('input[type="email"]'),
  textArea: document.querySelector('textarea[name="message"]'),
};

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onFeedbackFormState, 500));
refs.form.addEventListener('submit', onButtonSubmit);

function onFeedbackFormState(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  const localSorageObj = localStorage.getItem(STORAGE_KEY);
  const formDataParse = JSON.parse(localSorageObj);
  if (localSorageObj) {
    evt.target.value = formDataParse[evt.target.name];
  }
}

function onButtonSubmit(evt) {
  evt.preventDefault();
  const formDataParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(formDataParse);
  localStorage.removeItem(STORAGE_KEY);
  evt.target.reset();
}
// const formDataParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
// if (localStorage.getItem(STORAGE_KEY)) {
//   refs.email.value = formDataParse.email;
//   refs.textArea.value = formDataParse.message;
// }
