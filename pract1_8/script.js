let input = prompt("Введите число:");
if (input === null) {
  alert("Вы отменили ввод.");
} else {
  let number = parseFloat(input);
  if (!isNaN(number)) {
    alert("Вы ввели число: " + number);
  } else {
    alert("Вы ввели нечисловое значение. Пожалуйста, введите число.");
  }
}
