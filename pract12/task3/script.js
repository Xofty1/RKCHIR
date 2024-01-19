document.addEventListener("DOMContentLoaded", function () {
  var dataList = document.getElementById("dataList");

  // Бесконечный цикл для ввода данных до Esc или пустой строки
  while (true) {
    var newItem = prompt("Введите новый элемент:");

    // Если пользователь нажал Esc или ввел пустую строку, прервать цикл
    if (newItem === null || newItem === "") {
      break;
    }

    // Создание нового элемента li
    var li = document.createElement("li");
    li.textContent = newItem;

    dataList.appendChild(li);
  }
});
