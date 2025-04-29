function primeiraMaisculoUltimaMinuscula(arr){
    return arr.map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
}

console.log(primeiraMaisculoUltimaMinuscula(["RAFAEL","joão","ROBSOM","aLeMãO"]));