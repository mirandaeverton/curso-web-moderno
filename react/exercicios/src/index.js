import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './components/BomDia'
// ReactDOM.render(<BomDia nome="Everton" />, document.getElementById('root'))

import BoaTarde, { BoaNoite } from './components/Multiplos'
ReactDOM.render(
    <div>
        <BoaTarde nome="Everton" />
        <BoaNoite nome="Emily" />
    </div>,
    document.getElementById('root'))