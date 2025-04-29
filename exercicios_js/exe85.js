function duplicarConsoantes(arr) {
    return arr.map(s => s.replace(/[^aeiou\s\d\W_]/gi, c => c + c))
  }
  console.log(duplicarConsoantes(["banana", "uva"]))