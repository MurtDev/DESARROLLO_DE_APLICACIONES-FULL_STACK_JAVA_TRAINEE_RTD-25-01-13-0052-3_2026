// 1.- Obtén del 1 al 255:
function unoAl255(){
    let arrayUno255 = new Array();

    for (let i=0; i < 255; i++){
        arrayUno255[i] = i + 1;
    }

    return arrayUno255;
}

console.log("Del 1 al 255: " + unoAl255())

//2.- Consigue suma pares hasta 1000:
function sumaParesHastaMil(){
    let resultadoSuma = 0;

    for(let i=1; i<=1000; i ++){
        if((i%2) == 0){
            resultadoSuma += i;
        }
    }

    return resultadoSuma;
}

console.log("Suma pares hasta 1000: " + sumaParesHastaMil());


//3.- suma impares hasta 1000:
function sumaImparesHastaMil(){
    let resultadoSuma = 0;

    for(let i=1; i<=1000; i ++){
        if((i%2) != 0){//(i%2) == 1
            resultadoSuma += i;
        }
    }

    return resultadoSuma;
}

console.log("Suma impares hasta 1000: " + sumaImparesHastaMil());


 //4.- suma de todos los valores dentro de un array
function sumaArray(array){
    let resultadoSuma = 0;

    for(let i=0; i<= array.length -1 ; i ++){
        resultadoSuma += array[i];
    }

    return resultadoSuma;
}

let arrayNUmeros = [1, 15, 20, 24 ,75, 12, 13, 56, 10];

console.log("Suma de valor array: ", sumaArray(arrayNUmeros));

//Reemplazar positivos por "Big"

function positivoPorString(array){
    for(let i=0; i <= array.length -1 ; i ++){
        if(array[i] > 0){
            array[i] = "Big";
        }
    }

    return array;
}

let arrayNumeros2 = [1, -15, 20, -24 ,75, 12, -13, -56, 10];
console.log("El array original " + arrayNumeros2 + " Nuevo array " + positivoPorString(arrayNumeros2))


//Siempre hambriento
function siempreAmbriento(array){
    //parte 1, mostrar yummy!! cada vez que hay comida
    let contadorDeComidad = 0;
    for(let i=0; i <= array.length -1 ; i ++){
        if (array[i] === "comida") {
            console.log("Yummy!!");
            contadorDeComidad++;
        }
    }

    //parte 2, luego de verificar si existe comida en el array, mostrar "tengo hambre" si al menos hay una comida
    if (contadorDeComidad > 0) {
        console.log("Tengo hambre!!");
    }
    else {
        console.log("No hay comidad");
    }
}

let arrayComidaSin = [4, 2, -5, 5, 8, -6, 7, 5, 8,];
let arrayComida = ["comida", 4, 2, -5, "comida", 5, "comida", 8, -6, 7, "comida", 5, 8, "comida"];
siempreAmbriento(arrayComida);