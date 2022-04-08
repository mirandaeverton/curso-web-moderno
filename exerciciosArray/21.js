// Criar uma função que receba um array de números e retorne o menor número desse array.

function menorNumero (array) {
    let menor = array[0]
    array.forEach(element => {
        if (element < menor){
            menor = element
        }
    });
    return menor
}

console.log(menorNumero([3,2,1,5,1,8,0]))
console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))