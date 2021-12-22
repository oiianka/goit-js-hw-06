// Напиши скрипт, который для каждого элемента массива 
// ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод 
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список 
// ul.ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");
const createItems = [];

for (const ingredient of ingredients) {
  const createItem = document.createElement('li');
  createItem.textContent = ingredient;
  createItem.setAttribute('class', 'item');
  // console.log(createItem);
  createItems.push(createItem);
  ul.append(...createItems);
  };

 

  