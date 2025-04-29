function maisculaInvertida(arr){
    var maisculo = arr.map((s) => s.toUpperCase());
    return maisculo.reverse();
}

console.log(maisculaInvertida(["abacate", "maçã", "abacaxi"]));