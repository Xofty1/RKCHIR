document.addEventListener("DOMContentLoaded", function () {
  var notificationCount = 0;
  var notice = document.getElementById("notice");
  var isPaused = false;

  function addNotification() {
    if (!isPaused) {
      notificationCount++;
      updateNotificationCount();
    }
  }

  function updateNotificationCount() {
    var circle = document.getElementById("circle");
    circle.textContent = notificationCount;
    var new_p = document.createElement("p");
    var new_button = document.createElement("button");
    new_button.textContent = "X";
    new_button.className = "close";
    new_p.textContent = "Новое уведомление: " + notificationCount;
    notice.appendChild(new_p);
    new_p.appendChild(new_button);

    // Добавление обработчика события для кнопки "X"
    new_button.addEventListener("click", function () {
      // Установка свойства display в значение "none"
      new_p.style.display = "none";
    });
  }

  // Добавление уведомления каждые 3 секунды
  var intervalId = setInterval(addNotification, 3000);

  // Обработчик события для кнопки "Пауза"
  var pauseButton = document.getElementById("pauseButton");
  pauseButton.addEventListener("click", function () {
    isPaused = true;
    setTimeout(function () {
      isPaused = false;
    }, 10000); // Остановка на 10 секунд
  });
});
