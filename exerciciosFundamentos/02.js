/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function verificarTipoTriangulo(lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 == lado3){
        var tipoTriangulo = 'Equilátero'
    }else if (lado1 != lado2 && lado1!=lado3 && lado2!=lado3){
        tipoTriangulo = 'Escaleno'
    }else{
        tipoTriangulo = 'Isósceles'
    }

    console.log('Este é um triângulo ' + tipoTriangulo)
}

verificarTipoTriangulo(1,1,1)
verificarTipoTriangulo(1,2,3)
verificarTipoTriangulo(2,2,6)