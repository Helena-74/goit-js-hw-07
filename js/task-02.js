const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// Порядок дій:
// Знайдемо список ul#ingredients, прохйдемо через масив ingredients за допомогою методу map(), 
//він поверне новий масив з елементів списку <li>. Для кожного інгредієнту створимо новий 
// елемент <li> за допомогою методу document.createElement(), встановимо його текстовий вміст 
// та клас item.
// Потім вставляємо всі елементи списку за одну операцію до списку ul#ingredients за допомогою 
// методу append() та оператора розпакування (...).

const ingredientsList = document.querySelector('#ingredients');

const listItems = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ingredientsList.append(...listItems);

