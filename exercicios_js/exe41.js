function primeiraMaiuscula(arr) {
    return arr.map(s => s.charAt(0).toUpperCase() + s.slice(1))
  }
console.log(primeiraMaiuscula(["banana", "laranja", "uva"]))