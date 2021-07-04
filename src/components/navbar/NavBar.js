import React from 'react';
import './NavBar.css'

import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <div className='NavBar_Formulas'>
            <h2>Fórmulas:</h2>
            <ul>
                <li><Link to="/">Bashkara</Link></li>
                <li><Link to='/Quadrado'>Área e Volume do quadrado</Link></li>
                <li><Link to="/Triangulo">Área e Volume do Triângulo</Link></li>
            </ul>
        </div>
    )
}