/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/
/*
// function calcularMediaPonderada(codigoAluno, nota1, nota2, nota3) {
//     media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
//     if (media >= 5) {
//         console.log(`O aluno ${codigoAluno} teve as notas ${nota1}, ${nota2} e ${nota3}.
// Sua média ponderada é ${media}. Portanto, esta APROVADO!`)
//     }else {
//         console.log(`O aluno ${codigoAluno} teve as notas ${nota1}, ${nota2} e ${nota3}.
// Sua média ponderada é ${media}. Portanto, esta REPROVADO!`)
//     }
// }
*/
function calcularMediaPonderada(codigoAluno, nota1, nota2, nota3) {
    media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
    console.log(`O aluno ${codigoAluno} teve as notas ${nota1}, ${nota2} e ${nota3}.Sua média ponderada é ${media}. 
Portanto, está ${media >= 5 ? 'APROVADO!' : 'REPROVADO!'}`)
}

calcularMediaPonderada(100, 7,7,6)
calcularMediaPonderada(100, 7,5,6)
calcularMediaPonderada(100, 4,7,2)