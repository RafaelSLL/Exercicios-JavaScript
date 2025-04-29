function retornaNove(arr){
    return arr.filter((s) => s.length == 9)
}

console.log(retornaNove(["Abecedario", "Creche", "Escola", "Colegio", "girafales"]))