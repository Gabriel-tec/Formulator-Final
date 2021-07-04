import React from 'react'
import img from '../about-us/calculator.jpg.jpg'
import "./aboutUs.css"

export default function AboutUs(){
    return(
        <div className="AboutUsStyle">
            <div>
                <h1>Sobre O Formulator</h1>
                <p>O formulator foi uma idéia que quis fazer há muito tempo, e com ele pronto faltam sugestões de novas fórmulas para ajudar outros usuários. Envie uma sugestão pelos contatos.</p>
            </div>
            
            <img src={img} alt="calculadora" />
        </div>
    )
}