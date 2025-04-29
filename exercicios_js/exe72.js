const numeros = [6, 8, 10, 22, 55, 80];

function menorQueTrinta(arrayNumeros){
    var mult = numeros.filter((i) => i < 30)
    
    return mult;
}

console.log(menorQueTrinta(numeros));