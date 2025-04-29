const numeros = [6, 8, 10, 22, 55, 80];

function multPorQuatro(arrayNumeros){
    var mult = numeros.filter((i) => i % 4 === 0)
    
    return mult;
}

console.log(multPorQuatro(numeros));