function tamanhoSeis(arr) {
    return arr.filter(s => s.length == 6)
  }
console.log(tamanhoSeis(["banana", "laranja", "uva", "uvas"]));