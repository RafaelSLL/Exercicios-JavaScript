const numeros = [6, 8, 10, 22, 55, 80];

function menorCinquenta(arrayNumeros){
    var menor = numeros.filter((i) => i < 50)
    
    return menor;
}

console.log(menorCinquenta(numeros));