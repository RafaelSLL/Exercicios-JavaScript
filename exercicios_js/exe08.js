const notas = [8.0, 7.0, 4.5];

var media = (notas[0] + notas[1] + notas[2])/ notas.length;

if(media >= 7){
    console.log(`O aluno está APROVADO`)
} else {
    console.log(`O aluno está REPROVADO`)
}