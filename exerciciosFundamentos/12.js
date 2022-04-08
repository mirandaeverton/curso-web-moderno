// Faça um algoritmo que calcule o fatorial de um número.

function calcularFatorial(numero) {
    let fatorial = numero
    for (let i = numero - 1; i > 0; i--) {
        fatorial *= i
    }
    console.log(fatorial)
}

calcularFatorial(5)

