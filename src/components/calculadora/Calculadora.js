import React, {useState} from 'react';

import './StylesCalculadora.css';


export default function Calculadora(){

    const [result, SetResult] = useState("");

    const handleClick = (e) => {
        SetResult(result.concat(e.target.name));
    }

    const clear = () => {
        SetResult("");
    }

    const backspace = () => {
        SetResult(result.slice(0 , result.length - 1))
    }

    const calculate = () =>{
        try{
            SetResult(eval(result).toString())
        } catch(err){
            SetResult("ERROR")
        }
        
    }

    return(

        <div className='Calculadora'>
            <h1>Calculadora</h1>
           <form>
               <input type="text" name="" value={result} />

           </form>

        <div className='MathButtons'>
            <button onClick={clear} id='clear'>Clear</button>

            <button onClick={backspace} id='backspace'>C</button>

            <button id="BlueLight" name="/" onClick={handleClick}>&divide;</button>

            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            
            <button id="BlueLight" name="*" onClick={handleClick}>&times;</button>

            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>

            <button id="BlueLight" name="-" onClick={handleClick}>&ndash;</button>

            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>

            <button id="BlueLight" name="+" onClick={handleClick}>+</button>

            <button name="0" onClick={handleClick}>0</button>

            <button id="BlueLight" name="." onClick={handleClick}>.</button>

            <button id='result' onClick={calculate} >=</button>
        </div>

        </div>
    )
}