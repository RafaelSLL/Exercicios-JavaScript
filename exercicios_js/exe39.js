const numeros = [600, 800, 1000, 2200, 5500, 8000];

function determinaCasas(arrayNumeros){
    var casaDecimal = numeros.map((i) => i.toFixed(2));
    
    return casaDecimal;
}

console.log(determinaCasas(numeros));