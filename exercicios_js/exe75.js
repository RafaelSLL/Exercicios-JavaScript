const numeros = [6, 8, 10, 22, 55, 80];

function quartaPotencia(arrayNumeros){
    var mult = numeros.map((i) => Math.pow(i, 4))
    
    return mult;
}

console.log(quartaPotencia(numeros));