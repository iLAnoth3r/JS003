// FUNCION ANONIMA 2.2

boton = document.querySelector("div");

boton.addEventListener("click", function () {
  boton.style.backgroundColor = "yellow";
});

// EJERCICIO 2.3

function pintar(color = "green") {
  elemento = document.querySelector("p");
  elemento.style.backgroundColor = color;
}
