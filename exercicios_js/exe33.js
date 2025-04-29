const alunos = [
    {nome : "Roberto", idade : 16, notas : [8.0, 9.0, 5.0]}, 
    {nome : "Carlos", idade : 19, notas : [4.0, 9.0, 10]},  
    {nome : "Walter", idade : 47, notas : [1.0, 2.0, 3.0]}
];

const maioresDeIdade = alunos.filter(aluno => aluno.idade >= 18)
console.log(maioresDeIdade)