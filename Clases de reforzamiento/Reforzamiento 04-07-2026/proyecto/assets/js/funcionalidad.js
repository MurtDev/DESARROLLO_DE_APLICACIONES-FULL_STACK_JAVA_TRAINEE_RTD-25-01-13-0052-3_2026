// alert("Hola mundo 🌎");
const btnAbrirModal = document.querySelector("#btnAbrirModalNovedades");
const modalElemento = document.querySelector("#modalNovedades");

const modalNovedades = new bootstrap.Modal(modalElemento);

function abrirModal(){
    modalNovedades.show();
}

btnAbrirModal.addEventListener("click", abrirModal);