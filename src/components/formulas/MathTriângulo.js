import React, {useState} from 'react';

import './Styles_Bloco/BlocoDeCálculo.css';
import '../formulas/BlocosDeFormulas/StylesFormulas/MathTriangulo.css'

export default function MathTriangulo(){

    /*    [ÁREA]   */
    const [res, setRes] = useState("");

    const [side, setSide] = useState("");
    const [height, setHeight] = useState("");

    const handleAddSideValue = (e) =>{
        setSide(e.target.value)
    }

    const handleAddHeightValue = (e) =>{
        setHeight(e.target.value)
    }

    const CalculateAreaTri = () =>{
        let Side = side
        let Height = height

        let Value = Side * Height

        setRes(Value)
    }

    /*      [VOLUME]    */
    const [finalRes, setFinalRes] = useState("")
    const [volSide , setVolSide] = useState("")
    const [volHeight, setVolHeight] = useState("")

    const handleAddVolSideValue = (e) =>{
        setVolSide(e.target.value)
    }
    const handleAddVolHeight = (e) =>{
        setVolHeight(e.target.value)
    }

    const CalculateVolTri = () =>{

        let Side = volSide
        let Height = volHeight

        let Res = ((Side*Side)*Height)/3
    
        setFinalRes(Res)
    }

    return(
        <div className='Bloco'>

            
            <div className="TriItems">
                
                <main>
                    <h1>Àrea e Volume de triângulo</h1>

                    <h2>Àrea do triângulo</h2>
                    <input type="number" 
                    value={side}
                    onChange={handleAddSideValue}
                    placeholder="Base"/>

                    <input type="number" 
                    value={height}
                    onChange={handleAddHeightValue}
                    placeholder="Altura"/>

                    <button onClick={CalculateAreaTri}>Calcular</button>
                    <h2>Resultado: {res}</h2>
                </main>
                <main>
                    <h2>Volume Pirâmide base quadrada</h2>
                    <input type="number" 
                    value={volSide}
                    onChange={handleAddVolSideValue}
                    placeholder="Base"/>
                    <input type="number" 
                    value={volHeight}
                    onChange={handleAddVolHeight}
                    placeholder="Altura"/>

                    <button onClick={CalculateVolTri}>Calcular</button>
                    <h2>Resultado:{finalRes}</h2>
                </main>
            </div>
                     
        </div>
    )
        
    }
