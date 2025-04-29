const numeros = [6, 8, 10, 22, 36, 55, 80];

function multPorSeis(arrayNumeros){
    var mult = numeros.filter((i) => i % 6 === 0)
    
    return mult;
}

console.log(multPorSeis(numeros));