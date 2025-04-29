const numeros = [6, 8, 10, 22, 55, 80];

function multiplica(arrayNumeros){
    var mult = numeros.map((i) => i * 3)
    
    return mult;
}

console.log(multiplica(numeros));