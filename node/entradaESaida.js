const anonimo = process.argv.indexOf('-a') !== -1 // Recurso para passar parâmetros na execução do arquivo pelo terminal

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') // Saída padrão para o console (standard output). Por padrão, não abre nova linha, por isso o \n
    process.exit() // Método para finlizar prematuramente o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', dados => { // Método para ler o teclado. Aciona o evento somente quando é pressionado o Enter. O primeiro param precisa ser 'data'
        const nome = dados.toString().replace('\n','') // Traz consigo não somente os caracteres digitados, mas também o Enter. Por isso o replace()
        //console.log(nome)
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}