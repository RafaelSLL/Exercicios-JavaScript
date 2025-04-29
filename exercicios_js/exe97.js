function muda(arr){
    var maiuscula = arr.map((s) => s.toUpperCase())
    return maiuscula.reverse()
}
    

console.log(muda(["Yeshua", "Jeova", "Elohim", "Adonai"]))