function showNotification(options) {
  // Создание элемента уведомления
  var notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = options.content;

  // Добавление уведомления в тело документа
  document.body.appendChild(notification);

  // Показ уведомления
  notification.style.display = "block";

  // Автоматическое скрытие уведомления через 1,5 секунды
  setTimeout(function () {
    notification.style.display = "none";
    // Удаление уведомления из DOM после скрытия
    document.body.removeChild(notification);
  }, 1500);
}
