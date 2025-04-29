const numeros = [6, 8, 10, 22, 55, 80];

function aoCubo(arrayNumeros){
    var mult = numeros.map((i) => Math.pow(i, 3))
    
    return mult;
}

console.log(aoCubo(numeros));