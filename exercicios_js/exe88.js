function imparesMenoresQue20(arr) {
    return arr.filter(n => n % 2 !== 0 && n < 20)
  }
  console.log(imparesMenoresQue20([5, 10, 21, 19]))