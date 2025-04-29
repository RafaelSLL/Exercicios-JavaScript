const nomes = ["João", "Maria", "Jose", "Jesus"];

console.log(`Map -> [${nomes.map((i) => i.toLowerCase())}]`);

function retornaMinusculo(arrayNomes){
    console.log(arrayNomes.map((i) => i.toLowerCase()));
}

retornaMinusculo(nomes);