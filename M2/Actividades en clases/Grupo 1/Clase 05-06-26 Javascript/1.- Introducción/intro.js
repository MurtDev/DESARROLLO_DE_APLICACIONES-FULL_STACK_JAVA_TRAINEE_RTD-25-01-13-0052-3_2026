//================= INTRODUCCIÓN A JAVASCRIPT ==========

//ESTO ES UN COMENTARIO
/* 
este 
 es
 un 
 comentario
 de
 más
 de
 una
 línea
*/

//======= Variables =========

// Una variable en JavaScript es un espacio de memoria 
// con un nombre para almacenar datos que se pueden utilizar y modificar a lo largo del código.

// PARA DECLARAR VARIABLES 
// No deben contener espacios; se
// recomienda usar _ o camelCase.

//USAMOS EL = PARA ASIGNAR UN VALOR

//Declaración de variables
// var: Era la forma tradicional de declarar variables en JavaScript, pero se ha vuelto
// menos común con la introducción de let y const.
var edad = 25;

/*
let: let permite declarar variables con alcance de bloque, es decir, solo existen dentro
del bloque donde se definen, como en funciones, bucles o condicionales.
pensemos en {   } como bloques*/

let nombre = "Luis";

let nombre_completo = "";
let nombreCompleto = "";

/*
const: const se utiliza para declarar constantes, es decir,
variables que no pueden cambiar su valor una vez asignado. Al igual que let, const tiene
un alcance de bloque.
*/
const pi = 3.1416;

edad = 28; //Tipo de dato entero
edad = "Hola mundo"; //Tipo de dato String/texto
edad = 23.8;
edad = true; 

//============ Funciones Nativas ==================
console.log("Hola ", nombre)
