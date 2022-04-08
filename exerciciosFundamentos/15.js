/*
Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function venderCarro(modelo) {
    switch (modelo) {
        case 'Hatch':
            return "Compra efetuada com sucesso."
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            return "Tem certeza que não prefere este modelo?"
            break
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
    }
}

console.log(venderCarro('Hatch'))
console.log(venderCarro('Sedan'))
console.log(venderCarro('Motocicleta'))
console.log(venderCarro('Caminhonete'))
console.log(venderCarro('Auto Caravana'))