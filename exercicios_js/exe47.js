const numeros = [6, 8, 10, 22, 55, 80];

function multiplica(arr){
    var mult = arr.map((i) => i * 10);
    
    return mult;
}

console.log(multiplica(numeros));