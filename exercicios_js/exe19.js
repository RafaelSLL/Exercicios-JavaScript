const numeros = [45, 199, 2999, 299, 1231, 13423, 85388, 13841823, 83881823, 111, 28328, 1234872134, 11239, 1234, 13499491, 92934193, 99999999, 12231341234, 9999999];

function localizaMaiorNumero(arrayNumeros){
    return Math.min(...arrayNumeros);    
}

console.log(localizaMaiorNumero(numeros));