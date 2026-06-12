/*
1️⃣ ¿Qué es el DOM? (explicación simple)

El DOM (Document Object Model) es la forma en que JavaScript “ve” la página web.
📌 El HTML se transforma en un árbol de objetos, donde:

<html> es el nodo principal
<body>, <h1>, <p>, <button> son nodos hijos

👉 JavaScript puede:

Leer elementos
Cambiarlos
Eliminarlos
Crear nuevos


2️⃣ ¿Cómo accedemos al DOM?
JavaScript interactúa con el DOM (Document Object Model) a través del objeto document.

🧠 ¿Qué es el objeto document?

    * El objeto document es el puente entre el código HTML (lo que ves en la página web) y JavaScript.
    * Representa todo el contenido de la página: el HTML, los elementos, los atributos y el texto.

En resumen, document es como el “manejador” de todo lo que está en la página web.

🔍 ¿Cómo usamos document?

Con document, podemos seleccionar, leer y modificar los elementos del HTML de la página. 
Existen varias formas de acceder a los elementos del DOM, y aquí te voy a explicar las más comunes.
*/

//Selecionar elementos del DOM

//=========== Por ID (el más usado) ==========
const titulo = document.getElementById("titulo");

console.log(titulo.textContent);
console.log(titulo.innerText);

//selecionar el botón
const btnCambiarTitulo = document.getElementById("boton-cambiar-titulo");
console.log(btnCambiarTitulo.textContent);

btnCambiarTitulo.addEventListener("click", function(){
    //Manupulación de valores

    /*👉 textContent Lee o modifica TODO el texto real del elemento,
    tal como está en el HTML, sin importar estilos. 

    ✅ Características
    Devuelve todo el texto
    Incluye texto oculto (display: none)
    No interpreta HTML
    Es más rápido
    Es el más recomendado para cambiar texto
    */
    //titulo.textContent = "¡Título cambiado con TextContent!";

    /*La propiedad innerText de un nodo nos permite modificar su nodo de texto. 
    Es decir, acceder y/o modificar el contenido textual de algún elemento del DOM.
    
    👉 Lee o modifica SOLO el texto visible en pantalla.
    ✅ Características
    Respeta CSS (display:none)
    No muestra texto oculto
    Depende del renderizado
    Es más lento
    Se usa cuando importa lo que el usuario ve
    */

    titulo.innerText = "¡Título cambiado con innerText!";

});

//============= Por clase ================
const textos = document.getElementsByClassName("texto");
const btnCambiarTextos = document.getElementById("boton-cambiar-parrafos");

btnCambiarTextos.addEventListener("click", function(){
    // for(let i=0; i < textos.length; i++){
    //     textos[i].classList.add("resaltar");
    // }

    for(let texto of textos){
        texto.style.backgroundColor = "blue";
        texto.style.color = "red";
        texto.style.fontSize = "30px";
    }
});

//==================== Selecionar elementos por tagName =======
const parrafos = document.getElementsByTagName("p");
const btnCambiarTextos2 = document.getElementById("boton-cambiar-parrafos2");

btnCambiarTextos2.addEventListener("click", function(){
    for(let texto of parrafos){
        texto.style.color = "green";
        texto.style.fontSize = "50px";
    }
});


//Selecionar usando querySelector()
//Busca el primer elemento que coincidad con el selector css

/*caracteristicas : 
- Usa selectores css
- Más flexible
- Más moderno
- Más facil de recordar
*/

document.querySelector("#titulo");//Selección por id
document.querySelector(".texto");//selección por clase
document.querySelector("p");//selección por nombre de etiqueta

//Selecionar con querySelectorAll()
//Busca todos los elementos que coincidad con un selector css

/* 
Carasteristicas: 
- Devuelve un conjunto de nodos o un alista de nodos 
- permite iterar usando bucles, for, while, forEach
- Es más comodo de utilizar que getElementByTagName() y 
getElementsByClassName
*/

const parrafos3 = document.querySelectorAll(".texto");
const btnCambiarTexto3 = document.querySelector("#boton-cambiar-parrafos3");

btnCambiarTexto3.addEventListener("click", function(){
    parrafos3.forEach(parrafo => {
        parrafo.style.color = "blue";
        parrafo.style.fontSize = "100px";
    })
});

//Obteneción y manipulación de textos valores
const mensaje = document.querySelector("#mensaje");
mensaje.innerHTML = "<strong>Hola mundo!</strong>";

//Obtener datos desde los inputs

//1 paso selecionar elementos
let numeroUno = document.querySelector("#num-uno");
let numeroDos = document.querySelector("#num-dos");
let btnSumar = document.querySelector("#btn-mostrar-suma");
let resultado = document.querySelector("#resultadoSuma");

//2 paso darle funcionalidad al botón
btnSumar.addEventListener("click", function(){
    let resultadoSuma = Number(numeroUno.value) + Number(numeroDos.value);
    resultado.textContent = resultadoSuma;
});