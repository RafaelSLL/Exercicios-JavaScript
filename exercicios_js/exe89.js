function primeiraMinusculaUltimaMaiuscula(arr) {
    return arr.map(s => s.charAt(0).toLowerCase() + s.slice(1, -1) + s.slice(-1).toUpperCase())
  }
  console.log(primeiraMinusculaUltimaMaiuscula(["Banana", "UVA"]))