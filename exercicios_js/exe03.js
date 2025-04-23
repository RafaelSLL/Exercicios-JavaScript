const matricula = "99312783718274";
var nomeAluno = "Carlos Roberto";

function exibirCurso() {
    let curso = "mecanica";

    return `O ${nomeAluno} \nestá cursando: ${curso} \ncom a matricula: ${matricula}`;
}

console.log(exibirCurso());