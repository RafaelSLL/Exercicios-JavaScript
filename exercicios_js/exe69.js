function ultimaPrimeiraMinuscula(arr) {
    return arr.map(s => s.charAt(0).toLowerCase() + s.slice(1, -1) + s.slice( -1).toLowerCase())
  }
console.log(ultimaPrimeiraMinuscula(["BANANA", "LARANJA", "UVA"]));

function primeiraUltimaMinuscula(arr) {
    return arr.map(s => s.charAt(0).toLowerCase() + s.slice(1, -1) + s.slice(-1).toLowerCase())
  }
  console.log(primeiraUltimaMinuscula(["Banana", "UVA"]))