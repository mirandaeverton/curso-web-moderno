import React from 'react'
import ReactDOM from 'react-dom'

// Components with parameters
// import BomDia from './components/BomDia'
// ReactDOM.render(<BomDia nome="Everton" />, document.getElementById('root'))

// Multiple components
// import BoaTarde, { BoaNoite } from './components/Multiplos'
// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Everton" />
//         <BoaNoite nome="Emily" />
//     </div>,
//     document.getElementById('root'))

// Class components
// import Saudacao from './components/Saudacao'

// ReactDOM.render(<div>
//     <Saudacao nome="João" tipo="E aí" />
// </div>
// , document.getElementById('root'))

// Parent and children - Versão engessada
// import Pai from "./components/Pai"
// ReactDOM.render(
//     <div>
//         <Pai nome="Sidnei" sobrenome="Miranda" />
//     </div>
//     , document.getElementById('root'))

// Parent and children -Versão mais versátil
import Pai from "./components/Pai"
import Filho from "./components/Filho"
ReactDOM.render(
    <div>
        <Pai nome="Sidnei" sobrenome="Miranda">
            <Filho nome="Pedro" />
            <Filho nome="Emily" />
            <Filho nome="Samuel" />
        </Pai>
    </div>
    , document.getElementById('root'))