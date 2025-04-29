function ultimaMaiuscula(arr) {
    return arr.map(s => s.slice(0) + s.charAt(s.length - 1).toUpperCase())
  }
console.log(ultimaMaiuscula(["banana", "laranja", "uva"]));