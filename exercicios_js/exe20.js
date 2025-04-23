const numeros = [45, 199, 2999, 299, 1231];

function mediaArray(arrayNumerico){
    const soma = arrayNumerico.reduce((acc, n) => acc + n, 0);
    return soma/arrayNumerico.length;
}

console.log("Media do array:", mediaArray(numeros));