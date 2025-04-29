const numeros = [6, 8, 10, 22, 55, 80];

function retornaMaiores(arrayNumeros){
    var acima = numeros.filter((i) => i >= 10);
    
    return acima;
}

console.log(retornaMaiores(numeros));