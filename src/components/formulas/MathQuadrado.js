import React, {useState} from 'react';

import './Styles_Bloco/BlocoDeCálculo.css';
import './BlocosDeFormulas/StylesFormulas/MathQuadrado.css'

export default function MathQuadrado(){

    /*    [ÁREA]   */
    const [result, SetResult] = useState("")
    const [side, setSide] = useState("")

    const handleAddSideValue = (e) =>{
        setSide(e.target.value)
    }

    const SideSquare = () =>{
        let Side = side

        SetResult(Side * Side)
    }

    /*    [VOLUME]   */
    const [vol, setVol] = useState("")
    const [finalResult, setFinalResult] = useState("")

    const handleAddVol = (e) => {
        setVol(e.target.value)
    }

    const VolSquare = () =>{
        let Volume = vol

        setFinalResult((Volume*Volume)*Volume)
    }

    return(
        <div className='Bloco'>

            
            <div className="SquareItems">
                
                <main>
                    <h1>Área e Volume do Quadrado</h1>

                    <h2>Àrea do quadrado</h2>

                    <input type="number" 
                    onChange={handleAddSideValue}
                    value={side}
                    placeholder="Lado do quadrado"/>

                    <button onClick={SideSquare}>Calcular</button>
                    <h2>Resultado: {result}</h2>
                </main>
                <main>
                    <h2>Volume do quadrado</h2>
                    <input type="number"  
                    value={vol}
                    onChange={handleAddVol}
                    placeholder="Lado do cubo"/>
                    <button onClick={VolSquare}>Calcular</button>
                    <h2>Resultado: {finalResult}</h2>
                </main>
            </div>
                     
        </div>
    )
        
    }
