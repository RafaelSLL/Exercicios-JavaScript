function divideDez(arr){
    return arr.filter((i) => i % 10 === 0)
}

console.log(divideDez([10, 100, 40, 23, 54, 67, 55, 70]))