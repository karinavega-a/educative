let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
};
/*Enviar Email */
const botonEnviarCorreo = document.querySelector(".btn-inf");

botonEnviarCorreo.addEventListener("click", function(evento) {
  evento.preventDefault();

  const asunto = "¡Quiero mas infromación!";
  const cuerpo = "";
  window.location.href = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
});
