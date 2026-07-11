// alert("Hola mundo 🌎");
const btnAbrirModal = document.querySelector("#btnAbrirModalNovedades");
const modalElemento = document.querySelector("#modalNovedades");
const nombreInput = document.querySelector("#nombreNovedades");
const correoInput = document.querySelector("#correoNovedades");
const mensajeNovedades = document.querySelector("#mensajeNovedades");
const formularioNovedades = document.querySelector("#formularioNovedades");
const btnGuardarNovedades = document.querySelector("#btnGuardarNovedades");

const modalNovedades = new bootstrap.Modal(modalElemento);

//Funciones
function abrirModal() {
    ocultarMensaje();
    vaciarFormulario();
    modalNovedades.show();
}

function cerrarModal() {
    modalNovedades.hide();
}

//Mostrar un mensaje dentro del modal
function mostrarMensaje(texto, tipo) {
    //mensajeNovedades.textContent = texto;
    //mensajeNovedades.className = `alert alert-${tipo}`;

    //? OTRA FORMA DE MOSTRAR ALERTA (con libreria sweetalert2) 
    const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
    
    /*
    Tipos de icono en sweetalert2

    warning, error, success, info, and question


    Tipos de class en bootstrap 

    primary, secondary, success, danger, warning, info, light, dark
    
    */    

    if (tipo == "danger"){
        tipo = "error";
    } 

    Toast.fire({
            icon: tipo,
            title: texto
        });
}


//Ocultar mensaje
function ocultarMensaje() {
    mensajeNovedades.textContent = "";
    mensajeNovedades.className = "alert d-none";
}


//Vacíar formulario
function vaciarFormulario() {
    //opción 1
    //nombreInput.value = "";
    //  correoInput.value = "";

    //opción 2
    formularioNovedades.reset();
    btnGuardarNovedades.disabled = false;
    btnGuardarNovedades.textContent = "Enviar";
}


function guardarSuscriptor(nuevoSuscriptor){
    //Obtener los registros anteriores
    let registrosGuardados = JSON.parse(localStorage.getItem("suscriptores")) || [];
    
    //Agregar el nuevo registro
    registrosGuardados.push(nuevoSuscriptor);

    //Guardar arrgeglo actualizado en el almacenamiento local
    localStorage.setItem("suscriptores", JSON.stringify(registrosGuardados));


    return true;
}


function procesarFormulario(evento) {
    //Evitar que la página se recargue
    evento.preventDefault();

    const nombre = nombreInput.value.trim();//trim() realiza la limpieza del texto, quitar espacios vacíos
    const correo = correoInput.value.trim();

    if (nombre === "" || correo === "") {
        mostrarMensaje("Debes completar todos los campos", "danger");
    } else {
        //Simulación de envío
        btnGuardarNovedades.disabled = true;
        btnGuardarNovedades.textContent = "Enviando...";

        setTimeout(() => {//Simular el envío al backend

            const nuevoSuscriptor = {
                nombre : nombre,
                correo : correo,
                fechaRegistro : new Date().toLocaleString()
            }

            let guardadoCorrecto = guardarSuscriptor(nuevoSuscriptor);

            if(guardadoCorrecto){
                mostrarMensaje(
                    `Gracias ${nombre}. Tu información fue envíada correctamente`, 
                    "success"
                );
            }else{
                mostrarMensaje(
                    `Ocurrio un error al intentar guardar la información, intente más tarde`, 
                    "danger"
                );
            }

            //Cerrar el modal después de unos segundos
            setTimeout(() => {
                cerrarModal();
                ocultarMensaje();
                vaciarFormulario();
            }, 3000); 
        
        
        }, 1500);   
    }
}


//Eventos

btnAbrirModal.addEventListener("click", abrirModal);

formularioNovedades.addEventListener("submit", procesarFormulario);
