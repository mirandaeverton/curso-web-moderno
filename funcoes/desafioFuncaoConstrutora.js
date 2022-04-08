// Classe

class Pessoa {
    constructor(nome){
        this.name = nome
    }
    falar(){
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Função Construtora

function criarPessoa(nome){
    let name = nome
    this.falar = function() {
        console.log(`Meu nome é ${name}`)
    }
}

const p2 = new criarPessoa('Carlos')
p2.falar()