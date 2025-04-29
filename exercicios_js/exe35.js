const numeros = [6, 8, 10, 22, 55, 80];

function decrementar(arrayNumeros){
    var decremento = numeros.map((i) => i - 1);
    
    return decremento;
}

console.log(decrementar(numeros));