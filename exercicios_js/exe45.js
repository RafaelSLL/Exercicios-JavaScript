function primeiraMaiuscula(arr) {
    const maiuscula = arr.map(s => s.toUpperCase());
    return maiuscula.reverse();
  }

console.log(primeiraMaiuscula(["banana", "laranja", "uva"]));