const numeros = [6, 8, 10, 22, 55, 80];

function multiplicaQuadrado(arrayNumeros){
    console.log(arrayNumeros.map((i) => Math.pow(i, 2)));
}

multiplicaQuadrado(numeros);