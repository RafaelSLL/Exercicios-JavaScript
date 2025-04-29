function imparesMaioresQue15(arr) {
    return arr.filter(n => n % 2 !== 0 && n > 15)
  }
  console.log(imparesMaioresQue15([10, 17, 19, 22]))