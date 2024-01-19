document.addEventListener("DOMContentLoaded", function () {
  var parallaxLayer = document.querySelector(".parallax-layer");
  window.addEventListener("scroll", function () {
    var yOffset = window.scrollY;
    parallaxLayer.style.transform = "translateY(" + yOffset * 0.5 + "px)";
  });
});
