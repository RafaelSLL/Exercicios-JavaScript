function triplicaVogal(arr) {
    return arr.map(s => s.replace(/[aeiouAEIOU]/g, v => v + v + v))
  }
  console.log(triplicaVogal(["banana", "uva"]))