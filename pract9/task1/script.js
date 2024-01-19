function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCaptcha() {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const sum = num1 + num2;
  const captchaNumbers = `${num1} + ${num2} = ?`;

  document.getElementById("captchaNumbers").textContent = captchaNumbers;
  return sum;
}

function checking(expectedSum, captchaValue) {
  if (captchaValue === expectedSum.toString()) {
    document.getElementById("errorText").textContent = "Молодец, капча решена";
    document.getElementById("errorText").style.color = "green";
    document.getElementById("submitButton").removeAttribute("disabled");
  } else {
    document.getElementById("errorText").textContent =
      "Неверная сумма чисел. Пожалуйста, попробуйте ещё раз.";
    document.getElementById("errorText").style.color = "red";
    document.getElementById("submitButton").setAttribute("disabled", true);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const expectedSum = generateCaptcha();
  const captchaInput = document.getElementById("captchaInput");
  captchaInput.addEventListener("input", function () {
    const captchaValue = captchaInput.value;
    checking(expectedSum, captchaValue);
  });

  document
    .getElementById("captchaForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
    });
});
