const tecla = document.querySelector("div");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") tecla.style.backgroundColor = "pink";
  else if (event.key === "s") tecla.style.backgroundColor = "orange";
  else if (event.key === "d") tecla.style.backgroundColor = "skyblue";
});

//EJERCICIO 3.4
document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "w" || event.key === "e") {
    const nomCual = document.getElementById("divNueva");
    if (nomCual === null) {
      contenedor = document.querySelector("body");
      nuevoElemento = document.createElement("div");
      nuevoElemento.style.width = "200px";
      nuevoElemento.style.height = "200px";
      nuevoElemento.style.border = "2px black solid";
      nuevoElemento.style.marginTop = "3px";
      nuevoElemento.setAttribute("id", "divNueva");
      if (event.key === "q") nuevoElemento.style.backgroundColor = "purple";
      if (event.key === "w") nuevoElemento.style.backgroundColor = "grey";
      if (event.key === "e") nuevoElemento.style.backgroundColor = "brown";
    } else {
      if (event.key === "q") nuevoElemento.style.backgroundColor = "purple";
      if (event.key === "w") nuevoElemento.style.backgroundColor = "grey";
      if (event.key === "e") nuevoElemento.style.backgroundColor = "brown";
    }

    contenedor.appendChild(nuevoElemento);
  }
});
