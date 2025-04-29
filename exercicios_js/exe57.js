function minusculaInvertida(arr) {
    const maiuscula = arr.map(s => s.toLowerCase());
    return maiuscula.reverse();
  }

console.log(minusculaInvertida(["BANANA", "LARANJA", "UVA"]));