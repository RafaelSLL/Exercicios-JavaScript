function começaComC(arr) {
    return arr.filter(s => s.toLowerCase().startsWith("c"))
  }

console.log(começaComC(["Carro", "cavalo", "Uva", "Maçã", "Cachorro"]));