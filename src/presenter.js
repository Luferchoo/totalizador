const cantidad = document.querySelector("#cantidad_items");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

const precio = document.querySelector("#precio_items");
const prec = document.querySelector("#precio-form");
const resp = document.querySelector("#resultado-prec");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(cantidad.value);
 
  div.innerHTML = "<p> Cantidad de Item: " + firstNumber + "</p>";
});

prec.addEventListener("submit", (event) => {
  event.preventDefault();

  const Precio1 = Number.parseInt(precio.value);
  resp.innerHTML = "<p> Precio por Item: " + Precio1 + "</p>";
});
