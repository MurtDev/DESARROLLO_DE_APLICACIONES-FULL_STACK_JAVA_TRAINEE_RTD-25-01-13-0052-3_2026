
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