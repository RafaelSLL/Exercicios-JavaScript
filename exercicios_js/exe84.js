const numeros = [6, 8, 10, 22, 36, 55, 80];

function maiorQueVinteCinco(arrayNumeros){
    var mult = numeros.filter((i) => i > 25)
    
    return mult;
}

console.log(maiorQueVinteCinco(numeros));