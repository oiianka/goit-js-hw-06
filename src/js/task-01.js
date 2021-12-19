// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега <h2>) и 
// количество элементов в категории (всех вложенных в него <li>).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const body = document.body;

const mainListByTagName = body.querySelectorAll(".item");
console.log("Number of categories:", mainListByTagName.length);

const headers = body.querySelectorAll("h2");

console.log("Category: ", headers[0].textContent);
console.log("Elements:", headers[0].nextElementSibling.children.length)
console.log("Category: ", headers[1].textContent);
console.log("Elements:", headers[1].nextElementSibling.children.length)
console.log("Category: ", headers[2].textContent);
console.log("Elements:", headers[2].nextElementSibling.children.length)