function começaComD(arr) {
    return arr.filter(s => s.toLowerCase().startsWith("d"))
  }
  console.log(começaComD(["Banana", "Uva", "Maçã", "Dado"]))