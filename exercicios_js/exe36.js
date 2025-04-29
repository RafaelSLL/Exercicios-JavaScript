const numeros = [6, 8, 10, 22, 55, 80];

function multiploDeCinco(arrayNumeros){
    var multiplos = numeros.filter((i) => i % 5 === 0)
    
    return multiplos;
}

console.log(multiploDeCinco(numeros));