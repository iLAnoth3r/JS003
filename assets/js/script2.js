// EJERCICIO 3

const negro = document.querySelectorAll("#uno, #dos, #tres, #cuatro");

for (let index = 0; index < 4; index++) {
  negro[index].addEventListener("click", function () {
    negro[index].style.backgroundColor = "black";
  });
}
