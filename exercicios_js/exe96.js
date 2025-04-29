function multPorNove(arr){
    return arr.filter((i) => i % 9 === 0)
}

console.log(multPorNove([2, 6, 12, 18, 20, 36, 35, 123, 1234]))