const numeros = [6, 8, 10, 22, 55, 80];

function decrementa(arrayNumeros){
    var mult = numeros.map((i) => i - 2)
    
    return mult;
}

console.log(decrementa(numeros));