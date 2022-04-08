/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
    1) crianças com menos de 10 anos pagam R$80; 
    2) conveniados com idade entre 10 e 30 anos pagam R$50; 
    3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
    4) conveniados acima de 60 anos pagam R$130
*/

function calcularValorPlanoSaude(idadeDoConveniado) {
    if(idadeDoConveniado < 10) {
        console.log(`O valor do plano de saúde é R$180,00.`)
    }else if (idadeDoConveniado <= 30) {
        console.log(`O valor do plano de saúde é R$150,00.`)
    }else if (idadeDoConveniado <= 60) {
        console.log(`O valor do plano de saúde é R$195,00.`)
    }else{
        console.log(`O valor do plano de saúde é R$230,00.`)
    }
}

calcularValorPlanoSaude(60)
calcularValorPlanoSaude(7)
calcularValorPlanoSaude(0)
calcularValorPlanoSaude(30)
calcularValorPlanoSaude(61)