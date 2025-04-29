const numeros = [6, 8, 10, 22, 55, 80];

function maiorVinte(arrayNumeros){
    var menor = numeros.filter((i) => i > 20)
    
    return menor;
}

console.log(maiorVinte(numeros));