import React from "react"

// Posso exportar individualmente. Importo usando o destucturing
// import { BoaTarde, BoaNoite} from "./components/Multiplos"
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// Posso exportar desta forma. Importo usando o destructuring para o BoaNoite
// import BoaTarde, { BoaNoite} from "./components/Multiplos"
export default BoaTarde

// Posso exportar como um objeto
// export default {
//     BoaTarde,
//     BoaNoite
// }

