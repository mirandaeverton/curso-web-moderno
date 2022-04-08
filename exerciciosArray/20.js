/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário. */

const areaTriangulo = (base, altura) => {
    let area = base * altura / 2
    return area.toFixed(2)
}
console.log(areaTriangulo(2,2))