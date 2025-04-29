function divPorOito(arr){
    return arr.filter((i) => i % 8 === 0 )
}

console.log(divPorOito([1, 4, 6, 7, 8, 10, 22, 42, 88, 100]))