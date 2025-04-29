const numeros = [6, 8, 10, 22, 55, 80];

function incrementa(arrayNumeros){
    var mult = numeros.map((i) => i + 5)
    
    return mult;
}

console.log(incrementa(numeros));