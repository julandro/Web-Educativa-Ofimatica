const botones = document.querySelectorAll(".btnTab");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Quitamos la clase "is-active" de todos los botones
    botones.forEach((btn) => btn.classList.remove("is-active"));

    // Agregamos la clase "is-active" al botón clickeado
    boton.classList.add("is-active");
  });
});
