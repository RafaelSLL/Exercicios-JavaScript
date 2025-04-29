const numeros = [6, 8, 10, 49, 22, 55, 80];

function multPorSete(arrayNumeros){
    var mult = numeros.filter((i) => i % 7 === 0)
    
    return mult;
}

console.log(multPorSete(numeros));