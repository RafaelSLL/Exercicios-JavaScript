function duplicarVogais(arr) {
    return arr.map(s => s.replace(/[aeiou]/gi, (v) => v + v))
  }
  console.log(duplicarVogais(["banana", "uva"]))