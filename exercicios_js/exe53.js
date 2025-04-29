function removerVogais(arr) {
    return arr.map(s => s.replace(/[aeiouAEIOU]/g, ''))
  }
  console.log(removerVogais(["banana", "uva", "maçã"]))