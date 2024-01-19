function truncate(str, maxlength) {
  if (str.length > maxlength) {
    // Усекаем строку до maxlength - 1 символа и добавляем "…" в конце
    return str.slice(0, maxlength - 1) + "…";
  } else {
    // Если длина строки не превышает maxlength, возвращаем исходную строку
    return str;
  }
}

var maxLength = 10;

const button = document.getElementById("button");
button.addEventListener("click", function () {
  const i = document.getElementById("inputValue").value;

  var truncatedString = truncate(i, maxLength);
  document.getElementById("text").textContent = truncatedString;
});
