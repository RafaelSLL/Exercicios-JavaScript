const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;
let soma = 0;

while(i < numeros.length) {
    soma += numeros[i];
    i++
}

console.log("A soma de todos os números é:", soma);