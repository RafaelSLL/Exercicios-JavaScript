const nomes = ["João", "Maria", "Jose", "Jesus"];

console.log(`Map -> [${nomes.map((i) => i.toUpperCase())}]`);

function retornaMaiusculo(arrayNomes){
    console.log(arrayNomes.map((i) => i.toUpperCase()));
}

retornaMaiusculo(nomes);