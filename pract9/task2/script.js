function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    const inputElement = parseFloat(document.getElementById("startVal").value);

    if (
      !isNaN(inputElement) &&
      /^[1-9]\d*$/.test(inputElement) &&
      inputElement > 0
    ) {
      this.value += inputElement;
      document.getElementById("error").textContent = "";
    } else {
      document.getElementById("error").textContent = "Ошибка, неверное число";
    }
  };
}

const myAccumulator = new Accumulator(0); // Создаем объект Accumulator с начальным значением 0

document.getElementById("basket").addEventListener("click", function () {
  myAccumulator.read(); // Запрашиваем у пользователя ввод числа при нажатии на кнопку
  document.getElementById("amount").textContent = myAccumulator.value;
});
