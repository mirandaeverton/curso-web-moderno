// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function inteiroDivisivelPor3(numero) {
    if (Number.isInteger(numero)) {
        if (numero % 3 == 0) {
            console.log('É divisível por 3.')
            return true
        }else {
            console.log('Não é divisível por 3.')
            return false
        }
    }else {
        console.log('Este não é um número inteiro.')
    }
}

inteiroDivisivelPor3(9)
inteiroDivisivelPor3(10)
inteiroDivisivelPor3(9.5)
inteiroDivisivelPor3('Casa')

