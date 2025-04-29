const numeros = [6, 8, 10, 22, 55, 80];

function divide(arrayNumeros){
    var mult = numeros.map((i) => i / 2)
    
    return mult;
}

console.log(divide(numeros));