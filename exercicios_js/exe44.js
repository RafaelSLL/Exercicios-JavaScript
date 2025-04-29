const numeros = [6, 8, 10, 22, 55, 80];

function multiplos(arrayNumeros){
    var mult = numeros.filter((i) => i % 2 === 0);
    
    return mult;
}

console.log(multiplos(numeros));