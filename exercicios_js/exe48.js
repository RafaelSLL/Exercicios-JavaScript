const numeros = [6, 8, 10, 22, 55, 80];

function retornaImpar(arr){
    var impar = arr.filter((i) => i % 2 !== 0);
    
    return impar;
}

console.log(retornaImpar(numeros));