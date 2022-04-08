function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        if (segundos > 0) {setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    } else {
        reject([1, 2])
    }
    })
}

falarDepoisDe(0, 'Que Legal')
    .then(frase => frase.concat('!!!')) // Uma Promise que funcionou, retorna o valor de Resolve como parâmentro para a função then()
    .then(outraFrase => console.log(outraFrase))
    .catch(([erro1, erro2]) => console.log(erro1 + erro2)) // Uma Promise que falhou, retorna o valor de Reject como parâmetro para a função catch()