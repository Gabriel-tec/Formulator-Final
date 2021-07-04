import React, {useState} from 'react';
import './BlocosDeFormulas/StylesFormulas/Bashkara.css'

import './Styles_Bloco/BlocoDeCálculo.css'

export default function BlocoDeCalculo(){

    const [bashkara, setBashkara] = useState('')

    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [valorC, setValorC] = useState('');

    const handleAddValueA = (e) => {
        setValorA(e.target.value)
    }
        const handleAddValueB = (e) => {
        setValorB(e.target.value)
    }
    const handleAddValueC = (e) => {
        setValorC(e.target.value)
    }

    const calcular = () => {
        let ValorA = valorA
        let ValorB = valorB
        let ValorC = valorC

        /*      [DELTA]      */
        let A = Number(ValorA)
        let B = Number(ValorB)
        let C = Number(ValorC)

        let Delta = (B*B)-(4*A*C)

        /*     [BASHKARA]    */
        let Raiz = Math.sqrt(Delta)

        let RaizX = (-B+Raiz)/(2*A);
        let RaizY = (-B-Raiz)/(2*A);

        let Res = `Delta ${Delta} Raiz X ${RaizX} Raiz Y ${RaizY}`

        if(Delta < 0){
            Res = `Raiz Inválida por se negativa ${Delta}`
        }else if(Delta === 0){
            Res = "Raiz Nula '0'"
        }
        
        setBashkara(Res)
        
    }


    return(
        <div className='Bloco'>


            <div className="BashkaraItems">
                <h1>Fórmula de Bashkara</h1>
                <main>
                    <input type='Number' onChange={handleAddValueA} value={valorA} placeholder='Valor A'/>
                    <input type='Number' onChange={handleAddValueB} value={valorB} placeholder='Valor B'/>
                    <input type='Number' onChange={handleAddValueC} value={valorC} placeholder='Valor C'/>
                </main>
                <button onClick={calcular}>Calcular</button>
                <main>
                    <h2>Resultado: {bashkara}</h2>
                </main>
            </div>
                     
        </div>
    )
}