const cantidad = document.querySelector("#cantidad_items");
const precio = document.querySelector("#precio_items");
const estado = document.querySelector("#estados");

const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(cantidad.value);
  const Precio1 = Number.parseInt(precio.value);
  const estado1 = estado.value;
  div.innerHTML = "<p> Cantidad de Item: " + firstNumber + "</p>" + "<p> Precio por Item: " + Precio1 + "</p>" + "<p> Estado: " + estado1 + "</p>";
});


