function primeiraMaiuscula(arr) {
    return arr.filter(s => s.length > 5)
  }

console.log(primeiraMaiuscula(["banana", "laranja", "uva"]));