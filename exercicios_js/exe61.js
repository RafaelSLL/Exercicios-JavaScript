function ultimaPrimeiraMaiuscula(arr) {
    return arr.map(s =>s.charAt(0).toUpperCase() + s.slice(1) + s.charAt(s.length - 1).toUpperCase())
  }
console.log(ultimaPrimeiraMaiuscula(["banana", "laranja", "uva"]));