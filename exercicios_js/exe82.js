function igualOito(arr){
    var minuscula = arr.map((s) => s.toLowerCase())
    return minuscula.filter((s) => s.length == 8)
}

console.log(igualOito(["RAFAEL","joão","ROBSOM","aLeMãO", "MAThewus"]));