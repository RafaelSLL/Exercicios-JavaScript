const notas = [8.0, 4.5, 9.0, 4.5];

const aluno = {
    nome : "Carlos",
    cpf : "000.000.000-00",
    cidade : "João Pessoa"
}

var media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length;

var notaAleatoria = notas[Math.floor(Math.random() * notas.length)];

var notaConvertida = notaAleatoria * 10;

console.log(aluno.nome);
console.log(aluno.cpf);
console.log(aluno.cidade);
console.log(notas[0]);
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]);
console.log(`O aluno ${aluno.nome} tem a média de valor: ${media.toFixed(1)}`);
console.log(`A nota escolhida aleatoriamente ${notaAleatoria} em escala de 0-100: ${notaConvertida}`);

