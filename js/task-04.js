// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його 
// значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй 
// її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// Порядок дій.
// Створимо змінну counterValue, яка містить елемент спану з лічильником. Далі потрібно створити 
// дві змінні decrementBtn і incrementBtn, які містять кнопки "зменшити" та "збільшити". Також потрібно 
// створити змінну, яка містить поточне значення лічильника.  (currentValue)

// Потім додамо слухачів подій до кнопок. Кожен раз, коли користувач натискає на кнопку "зменшити", 
// ьуде зменшуватися значення змінної currentValue на 1 та оновлюватися текст лічильника змінною 
// counterValue. Те саме ми робимо й з кнопкою "збільшити".

const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

let currentValue = 0;

decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});