/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado. */

function funcaoDaSorte (palpite) {
    const min = 1
    const max = 10
    const sorteio = Math.floor(Math.random() * (max - min + 1)) + min
    if (palpite > max || palpite < min) {
        return `Palpite inválido. Por favor, informe um palpite entre ${min} e ${max}.`
    } else if (palpite == sorteio) {
        return `Parabéns!!! O número sorteado foi o ${sorteio}.`
    } else {
        return `Que pena!!! O número sorteado foi o ${sorteio}.`
    }
}

console.log(funcaoDaSorte(2))