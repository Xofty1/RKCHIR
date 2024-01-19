var products = [
  { cost: 100, name: "Milk" },
  { cost: 10, name: "Egg" },
  { cost: 99, name: "Chips" },
  { cost: 199, name: "Meat" },
  { cost: 99, name: "Product" },
];

var basket = [];
var result = 0;
var amo = 0;
var container = document.getElementById("product-container");
var b = document.getElementById("basket");
var res = document.getElementById("result");
res.textContent = "Итоговая цена: $" + result;

var amount = document.getElementById("amount");
amount.textContent = "Количество: " + amo + " шт";

var basketContainer = document.getElementById("basket");

products.forEach(function (product) {
  var card = document.createElement("div");
  var button_add = document.createElement("button");
  var button_del = document.createElement("button");
  card.className = "product-card";
  button_add.className = "product-button";
  button_del.className = "product-button";
  button_add.textContent = "Добавить в корзину";
  button_del.textContent = "Удалить продукт";

  button_add.addEventListener("click", function () {
    result += product.cost;
    amo += 1;
    res.textContent = "Итоговая цена: $" + result;
    amount.textContent = "Количество: " + amo + " шт";

    var existingItem = basket.find((item) => item.name == product.name);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      var newItem = { name: product.name, amount: 1 };
      basket.push(newItem);
    }

    updateBasket();
  });

  button_del.addEventListener("click", function () {
    var existingItem = basket.find((item) => item.name == product.name);
    if (existingItem.amount !== 0) {
      result -= product.cost;
      amo -= 1;
      res.textContent = "Итоговая цена: $" + result;
      amount.textContent = "Количество: " + amo + " шт";

      if (existingItem) {
        existingItem.amount -= 1;
        if (existingItem.amount === 0) {
          basket = basket.filter((item) => item.amount > 0); // оставляет в массиве только объекты количество, которых больше 0
        }
      }

      updateBasket();
    }
  });

  var nameElement = document.createElement("h2");
  nameElement.textContent = product.name;

  var costElement = document.createElement("p");
  costElement.textContent = "Cost: $" + product.cost;

  card.appendChild(nameElement);
  card.appendChild(costElement);
  card.appendChild(button_add);
  card.appendChild(button_del);
  container.appendChild(card);
});

function updateBasket() {
  b.innerHTML = "";
  basket.forEach(function (item) {
    var basketItem = document.createElement("p");
    basketItem.textContent =
      "Продукт: " + item.name + ". В количестве " + item.amount;
    basketContainer.appendChild(basketItem);
  });
}

var filter = document.getElementById("filter");

filter.addEventListener("click", function () {
  var inputValueA = document.getElementById("a").value;
  var a = parseFloat(inputValueA);
  var inputValueB = document.getElementById("b").value;
  var b = parseFloat(inputValueB);
  var filteredBasket = basket.filter(function (item) {
    return item.amount >= a && item.amount <= b;
  });
  var resultContainer = document.getElementById("filtered-basket");
  resultContainer.innerHTML = ""; // Очищаем предыдущие результаты
  var name = document.createElement("h3");
  if (isNaN(a) || isNaN(b)) name.textContent = "Введите корректные числа";
  else
    name.textContent =
      "Отфильтрованная корзина, в котором от " +
      a +
      " до " +
      b +
      " штук одного вида продуктов";
  resultContainer.appendChild(name);
  filteredBasket.forEach(function (item) {
    var basketItem = document.createElement("p");
    basketItem.textContent =
      "Продукт: " + item.name + ". В количестве " + item.amount;
    resultContainer.appendChild(basketItem);
  });
});

var sorted = document.getElementById("sorted");

sorted.addEventListener("click", function () {
  // Сортировка массива basket по количеству товара
  var sortBasket = basket.sort(function (a, b) {
    return a.amount - b.amount;
  });
  var sortContainer = document.getElementById("sorted-basket");
  sortContainer.innerHTML = ""; // Очищаем предыдущие результаты
  var name = document.createElement("h3");
  if (isNaN(a) || isNaN(b)) name.textContent = "Корзина пуста";
  else
    name.textContent =
      "Отсортированный массив по клоичеств товаров одного типа";
  sortContainer.appendChild(name);
  sortBasket.forEach(function (item) {
    var basketItem = document.createElement("p");
    basketItem.textContent =
      "Продукт: " + item.name + ". В количестве " + item.amount;
    sortContainer.appendChild(basketItem);
  });
});
