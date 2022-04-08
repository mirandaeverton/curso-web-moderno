import Pessoa from "./pessoa"
import './modulos/moduloA'
import './assets/' // Desta forma, busca automaticamente por um index.js dentro da pasta

const atendente = new Pessoa
console.log(atendente.cumprimentar())