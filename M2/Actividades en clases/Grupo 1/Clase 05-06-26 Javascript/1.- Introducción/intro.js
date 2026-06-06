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
/*
Esta función se utiliza para imprimir mensajes en la consola del navegador o en la consola del
entorno de desarrollo. Es útil para realizar pruebas y depurar el código, ya que puedes imprimir
valores y mensajes para verificar el flujo de ejecución.
*/
console.log("Hola ", nombre);
console.log("Hola mundo!!");

/*
La función alert() muestra una ventana emergente en el navegador con un mensaje para el usuario.
Es útil para mostrar mensajes de advertencia, notificaciones o solicitar confirmación del usuario.
*/
alert("¡Hola, mundo!");

/*
La función confirm() muestra una ventana emergente en el navegador con un mensaje y botones de
confirmación ("Aceptar" y "Cancelar"). Es útil para obtener la confirmación del usuario en situaciones
específicas.
*/

confirm("¿Está seguro de eliminar este elemento?");

/*
El prompt en JavaScript es una función que muestra un cuadro de diálogo al usuario para solicitar una
entrada de datos. Proporciona una forma sencilla de obtener información del usuario a través de una
ventana emergente en el navegador.
*/
prompt("Por favor, ingrese su nombre:");

/*
Estas funciones se utilizan para convertir una cadena de texto en un número entero o de punto
flotante, respectivamente. Son útiles cuando se necesita manipular datos numéricos
ingresados como cadenas de texto.
*/
parseInt("10"); 
parseFloat("3.14");


isNaN(); //Comprueba si un valor no es un número (Not-a-Number).

isNaN(123);       // false (es un número)
isNaN("Hola");    // true (no se puede convertir a número)
isNaN("123");     // false (se convierte al número 123)
isNaN(true);      // false (true se convierte a 1)

let numero = 52
console.log(Number.isNaN(numero));

//============== Cocatenación =============
//Primera forma
let primerNombre = "Juan";
let primerApellido = "Perez";

let nombreCompleto = primerNombre + " " + primerApellido + " Salazar";

console.log(nombreCompleto);

//Segunda forma
let nombreDos = "Juan";
let mensaje = `Hola, ${nombreDos}`;
console.log(mensaje);

//================= Expresiones aritméticas ============
let x = 9;
let y = 2;

let suma = x + y;
console.log(`La suma de x más y es igual a: ${suma}`)

let resta = x - y;
let multiplicacion = x * y;
let division = x/y;
let resto = x % y;

console.log(resto)

let exponente = x ** y

//================= Operadores de incremento y decremento ============

/* 
En JavaScript, existen operadores especiales que
permiten aumentar (++) o disminuir (--) el valor de una
variable de forma abreviada, en lugar de escribir una
suma o resta manualmente.
Estos operadores son muy útiles en bucles y en
situaciones donde es necesario modificar el valor de
una variable de manera sencilla.
*/

let variable1 = 10;
console.log(variable1);
variable1 = variable1 + 1;
console.log(variable1);
variable1 += 1;
console.log(variable1);


variable1++;//Incremento en 1
console.log(variable1)

//Decremento
variable1 = variable1 - 1;
variable1 -= 5;

variable1--;//Deceremento en 1

//============ Operadores de asignación ===========
let z = 10;

z += 5;
console.log(z);//15

z -=3;
console.log(z);//12

z *= 2;
console.log(z);//24

z /= 4;
console.log(z);//6

z %= 2;
console.log(z);//0

//=============== Operadores lógicos =============
let v1 = 5;
let v2 = "5";

/* 
Igualdad (==):
Compara si dos valores son iguales, sin tener en
cuenta el tipo de dato.
*/

console.log(v1 == v2);

/* 
Igualdad estricta (===):
Compara si dos valores son iguales, teniendo en
cuenta tanto el valor como el tipo de dato.
Devuelve true si son iguales en valor y tipo, y false
si no lo son.
*/
console.log(v1 === v2);

/* 
Desigualdad (!= o !==):
Compara si dos valores no son iguales. Devuelve
true si son diferentes y false si son iguales.
El operador !== también verifica el tipo de dato.
Tanto la comparación x != y como x !== y devuelven
true porque los valores son diferentes.
*/

let v3 = 10;//number
let v4 = "10";//String

console.log(v3 != v4);//false
console.log(v3 !== v4);//true

let v5 = 5;
let v6 = 10;

console.log(v5 > v6);//false
console.log(v5 < v6);//true
console.log(v5 >= v6);//false
console.log(v5 <= v6);//true


//=====================================================
/*
Operador AND (&&):
El operador AND devuelve true si ambos
operandos son true, y devuelve false en cualquier
otro caso.
El operador && se utiliza para evaluar dos
expresiones lógicas y devuelve true si ambas
expresiones son verdaderas.

*/

//? true (verdadero) && true (Verdadero)  ===> true (verdadero)
//? false (falso)    && true (Verdadero)  ===> false
//? false (falso)    && false (falso)   ===> false
//? true (Verdadero) && false (falso)   ===> false

let v7 = 5;
let v8 = 10;

//          true    true   ===> true
console.log(v7>0 && v8>0 );
//          true    false   ===> false
console.log(v7>0 && v8<0 );

/* 
Operador OR (||):
El operador OR devuelve true si al menos uno
de los operandos es true, y devuelve false solo
si ambos operandos son false.
El operador || se utiliza para evaluar dos
expresiones lógicas y devuelve true si al menos
una de las expresiones es verdadera.
*/

// true (verdadero) || true (Verdadero)  ===> true
// false (falso)    || true (Verdadero)  ===> true
// false (falso)    || false (falso)   ===> false
// true (Verdadero) || false (falso)   ===> true

let v9 = 5;
let v10 = 10;

//          true    true   ===> true
console.log(v9>0 || v10>0 );
//          true    false   ===> true
console.log(v9>0 || v10<0 );
//          false    false   ===> false
console.log(v9<0 || v10<0 );


/*
Operador NOT (!):
El operador NOT invierte el valor de una expresión
booleana. Si la expresión es true, el operador NOT
devuelve false, y si la expresión es false, el operador
NOT devuelve true.
El operador ! se utiliza para negar una expresión
lógica. Convierte true en false y viceversa.
*/

console.log(!(10>5));

/*
Sí — el NOT (!) es súper útil en “cosas reales” cuando 
quieres preguntar lo contrario de una condición, 
o cuando trabajas con banderas tipo isLoggedIn, 
isLoading, isDarkMode, etc.
*/

// let isLoggedIn = true;

// !isLoggedIn

//ejemplos
let isDarkMode = false;
//el usuario presiona el botón "Modo Oscuro"
isDarkMode = !isDarkMode

let isAuthorized = false;

if(!isAuthorized) {
    console.log("Acceso Denegado");
}

//===================== Sentencias condicionales ==================
/* 
Sentencia if-else:
La sentencia if-else es una estructura de control en programación que permite tomar
decisiones basadas en una condición. A diferencia de la sentencia if, que ejecuta un
bloque de código si una condición es verdadera y luego continúa con el resto del
programa, la sentencia if-else permite ejecutar un bloque de código si la condición es
verdadera y otro bloque de código si la condición es falsa.
*/

let hora = 13;
hora--;

if(hora < 12) {
    //Si la condición es true se ejecuta este bloque de código
    console.log("Buenos días");
}else{
    //si es false la condición se ejecuta ete bloque
    console.log("Buenas tardes");
}