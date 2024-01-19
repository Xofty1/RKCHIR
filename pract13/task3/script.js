document.addEventListener("DOMContentLoaded", function () {
  var parallaxLayer = document.querySelector(".parallax-layer");
  var sun = document.querySelector(".sun");
  var forest = document.querySelector(".forest");
  var isSunStopped = false;

  window.addEventListener("scroll", function () {
    var yOffset = window.scrollY;
    var sunRect = sun.getBoundingClientRect();

    // Проверка, если нижняя граница солнца находится выше высоты окна и солнце не остановлено
    if (sunRect.bottom > 0 && !isSunStopped) {
      sun.style.transform = "translateY(" + yOffset * 1.4 + "px)";
      forest.style.transform = "translateY(" + yOffset * -1 + "px)";
    } else {
      // Останавливаем солнце
      sun.style.transform = "none";
      forest.style.transform = "none";
      isSunStopped = true;
    }
  });
});
