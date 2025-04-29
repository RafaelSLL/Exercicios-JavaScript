function removerConsoantes(arr) {
    return arr.map(s => s.replace(/[^aeiouAEIOU]/g, ''))
  }
  console.log(removerConsoantes(["banana", "uva", "maçã"]))