function maiorSete(arr) {
    return arr.filter(s => s.length > 7)
  }
console.log(maiorSete(["banana", "laranja", "uva", "uvas", "abacaxi", "melancia", "almondega"]));