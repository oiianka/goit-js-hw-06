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

for (let elem of mainListByTagName) {
	console.log(`\nCategory: ${elem.querySelector("h2").textContent}`);
	console.log(
		`Elements: ${elem.querySelector("ul").querySelectorAll("li").length}`
	);
}



